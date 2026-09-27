import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: 'SELECT id, name, phone, service, barber, date, time, consent, created_at as "createdAt" FROM bookings ORDER BY created_at DESC'
    });
    
    const safeBookings = result.rows.map((row: any) => ({
      id: row['id'],
      name: row['name'] || 'Клиент',
      phone: row['phone'] || 'Нет телефона',
      service: row['service'] || 'Не указана', // ЗАЩИТА ОТ NULL
      barber: row['barber'] || 'Любой мастер', // ЗАЩИТА ОТ NULL
      date: row['date'],
      time: row['time'],
      consent: row['consent'],
      createdAt: row['createdAt']
    }));

    return NextResponse.json(safeBookings);
  } catch (error: any) {
    console.error('ADMIN BOOKINGS GET ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID не указан' }, { status: 400 });
    
    await client.execute({
      sql: 'DELETE FROM bookings WHERE id = ?',
      args: [id]
    });
    return NextResponse.json({ message: 'Удалено' });
  } catch (error: any) {
    console.error('ADMIN BOOKINGS DELETE ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
