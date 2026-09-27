import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ sql: 'SELECT * FROM services' });
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('Ошибка получения услуг:', error);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, price, grade_id } = body;
    
    const result = await client.execute({
      sql: 'INSERT INTO services (name, price, grade_id) VALUES (?, ?, ?)',
      args: [name, price, grade_id]
    });
    
    return NextResponse.json({ id: result.lastInsertRowid, message: 'Услуга создана' }, { status: 201 });
  } catch (error: any) {
    console.error('Ошибка создания услуги:', error);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}