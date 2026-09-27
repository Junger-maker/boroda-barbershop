// app/api/booking/route.ts
import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

const GAS_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

const ALL_TIME_SLOTS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

const SERVICE_DURATIONS: Record<string, number> = {
  'Комплекс': 2,
};

// 1. GET: Получаем свободное время с учётом длительности ВСЕХ записей
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const barber = searchParams.get('barber');
  const date = searchParams.get('date');
  const service = searchParams.get('service');

  if (!barber || !date) {
    return NextResponse.json({ availableTimes: ALL_TIME_SLOTS });
  }

  try {
    // Формируем SQL-запрос динамически в зависимости от выбора барбера
    let sql = 'SELECT time, service FROM bookings WHERE date = ?';
    const args: (string | number | null | boolean)[] = [date];
    
    if (barber !== 'Любой свободный') {
      sql += ' AND barber = ?';
      args.push(barber);
    }

    // Выполняем запрос через наш новый HTTP-клиент
    const result = await client.execute({ sql, args });
    const bookings = result.rows; // Массив объектов: [{ time: '10:00', service: 'Комплекс' }, ...]

    // Собираем ВСЕ занятые слоты (с учётом длительности каждой записи)
    const allBookedTimes: string[] = [];
    
    for (const booking of bookings) {
      const bookingTime = booking.time as string;
      const bookingService = booking.service as string;
      const bookingDuration = bookingService && SERVICE_DURATIONS[bookingService] ? SERVICE_DURATIONS[bookingService] : 1;
      
      const startIndex = ALL_TIME_SLOTS.indexOf(bookingTime);
      
      if (startIndex !== -1) {
        for (let j = 0; j < bookingDuration; j++) {
          if (startIndex + j < ALL_TIME_SLOTS.length) {
            const occupiedTime = ALL_TIME_SLOTS[startIndex + j];
            if (!allBookedTimes.includes(occupiedTime)) {
              allBookedTimes.push(occupiedTime);
            }
          }
        }
      }
    }

    // Теперь проверяем доступность для выбранной услуги
    const duration = service && SERVICE_DURATIONS[service] ? SERVICE_DURATIONS[service] : 1;
    const availableTimes: string[] = [];

    for (let i = 0; i < ALL_TIME_SLOTS.length; i++) {
      if (i + duration > ALL_TIME_SLOTS.length) break;

      let isSlotAvailable = true;
      for (let j = 0; j < duration; j++) {
        if (allBookedTimes.includes(ALL_TIME_SLOTS[i + j])) {
          isSlotAvailable = false;
          break;
        }
      }

      if (isSlotAvailable) {
        availableTimes.push(ALL_TIME_SLOTS[i]);
      }
    }

    return NextResponse.json({ availableTimes });
  } catch (error) {
    console.error('Ошибка получения расписания:', error);
    return NextResponse.json({ availableTimes: ALL_TIME_SLOTS }, { status: 500 });
  }
}

// 2. POST: Создаём новую запись
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, barber, date, time, consent } = body;

    // Создаём запись через HTTP-клиент
    const result = await client.execute({
      sql: `INSERT INTO bookings (name, phone, service, barber, date, time, consent) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [
        name, 
        phone, 
        service, 
        barber || null, 
        date || null, 
        time || null, 
        consent ?? true
      ]
    });

    const bookingId = result.lastInsertRowid;
    console.log(`[BOOKING] New booking #${bookingId}:`, { name, phone, service, barber, date, time });

    // Дублируем в Google Таблицу (фоновая задача, не блокирует ответ)
    if (GAS_URL && barber && date && time) {
      fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ name, phone, service, barber, date, time }),
      }).catch(err => console.error('[GAS] Ошибка дублирования:', err));
    }

    return NextResponse.json({ success: true, id: bookingId });
  } catch (error) {
    console.error('Критическая ошибка при создании записи:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}