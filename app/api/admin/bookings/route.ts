import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: `SELECT id, name, phone, service, barber, date, time, consent, created_at as "createdAt" 
            FROM bookings 
            ORDER BY created_at DESC`
    });
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('Ошибка получения записей:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID не указан' }, { status: 400 });
    
    await client.execute({
      sql: `DELETE FROM bookings WHERE id = ?`,
      args: [id]
    });
    return NextResponse.json({ message: 'Удалено' });
  } catch (error: any) {
    console.error('Ошибка удаления записи:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}