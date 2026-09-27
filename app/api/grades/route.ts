import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ sql: 'SELECT * FROM grades' });
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('Ошибка получения градаций:', error);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, icon } = body;
    
    const result = await client.execute({
      sql: 'INSERT INTO grades (name, icon) VALUES (?, ?)',
      args: [name, icon]
    });
    
    return NextResponse.json({ id: result.lastInsertRowid, message: 'Градация создана' }, { status: 201 });
  } catch (error: any) {
    console.error('Ошибка создания градации:', error);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}