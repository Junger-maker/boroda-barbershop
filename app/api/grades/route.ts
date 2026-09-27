import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: 'SELECT id, name, isActive, created_at as "createdAt" FROM grades WHERE isActive = 1 ORDER BY created_at ASC'
    });
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('GRADES GET ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
