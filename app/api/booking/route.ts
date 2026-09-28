import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

const GAS_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
const ALL_TIME_SLOTS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
const SERVICE_DURATIONS: Record<string, number> = { 'Комплекс': 2 };

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const barber = searchParams.get('barber');
  const date = searchParams.get('date');
  const service = searchParams.get('service');

  if (!barber || !date) {
    return NextResponse.json({ availableTimes: ALL_TIME_SLOTS });
  }

  try {
    let sql = 'SELECT time, service FROM bookings WHERE date = ?';
    const args: (string | number | null | boolean)[] = [date];
    
    if (barber !== 'Любой свободный') {
      sql += ' AND barber = ?';
      args.push(barber);
    }

    const result = await client.execute({ sql, args });
    const bookings = result.rows;

    const allBookedTimes: string[] = [];
    for (const booking of bookings) {
      const bookingTime = String(booking.time || '');
      const bookingService = String(booking.service || '');
      const duration = SERVICE_DURATIONS[bookingService] || 1;
      const startIndex = ALL_TIME_SLOTS.indexOf(bookingTime);
      
      if (startIndex !== -1) {
        for (let j = 0; j < duration; j++) {
          if (startIndex + j < ALL_TIME_SLOTS.length) {
            const occupiedTime = ALL_TIME_SLOTS[startIndex + j];
            if (!allBookedTimes.includes(occupiedTime)) allBookedTimes.push(occupiedTime);
          }
        }
      }
    }

    const duration = SERVICE_DURATIONS[service || ''] || 1;
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
      if (isSlotAvailable) availableTimes.push(ALL_TIME_SLOTS[i]);
    }

    return NextResponse.json({ availableTimes });
  } catch (error: any) {
    console.error('BOOKING GET ERROR:', error.message);
    return NextResponse.json({ availableTimes: ALL_TIME_SLOTS });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, barber, date, time, consent } = body;

    console.log('📝 Попытка создать запись:', { name, phone, service, barber, date, time, consent });

    const result = await client.execute({
      sql: `INSERT INTO bookings (name, phone, service, barber, date, time, consent) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [
        String(name), 
        String(phone), 
        String(service), 
        barber ? String(barber) : null, 
        date ? String(date) : null, 
        time ? String(time) : null, 
        consent ? 1 : 0
      ]
    });

    if (GAS_URL && barber && date && time) {
      fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ name, phone, service, barber, date, time }),
      }).catch(err => console.error('[GAS] Error:', err));
    }

    return NextResponse.json({ success: true, id: result.lastInsertRowid });
  } catch (error: any) {
    // ВОТ ЗДЕСЬ МЫ ТЕПЕРЬ УВИДИМ НАСТОЯЩУЮ ПРИЧИНУ!
    console.error('❌ BOOKING POST REAL ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
