import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute(`
      SELECT id, name, phone, service, barber, date, time, consent, created_at as "createdAt"
      FROM bookings
      ORDER BY created_at DESC
    `);

    const bookings = result.rows.map(row => ({
      id: row['id'],
      name: row['name'],
      phone: row['phone'],
      service: row['service'],
      barber: row['barber'],
      date: row['date'],
      time: row['time'],
      consent: row['consent'],
      createdAt: row['createdAt']
    }));

    return NextResponse.json(bookings);
  } catch (error: any) {
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
