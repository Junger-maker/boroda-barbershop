import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ sql: 'SELECT * FROM services' });
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Ошибка получения услуг:', error);
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}