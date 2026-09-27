import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: `SELECT b.*, bar.name as barber_name, s.name as service_name 
            FROM bookings b 
            LEFT JOIN barbers bar ON b.barber_id = bar.id 
            LEFT JOIN services s ON b.service_id = s.id 
            ORDER BY b.date DESC, b.time DESC`
    });
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('Ошибка получения записей:', error);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID не указан' }, { status: 400 });
    }
    
    await client.execute({
      sql: 'DELETE FROM bookings WHERE id = ?',
      args: [id]
    });
    
    return NextResponse.json({ message: 'Запись удалена' });
  } catch (error: any) {
    console.error('Ошибка удаления записи:', error);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}