import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: `SELECT id, name, isActive, created_at as "createdAt" FROM grades ORDER BY created_at ASC`
    });
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('Ошибка получения градаций:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await client.execute({
      sql: `INSERT INTO grades (name, isActive, created_at) VALUES (?, ?, ?)`,
      args: [body.name, 1, Date.now()]
    });
    return NextResponse.json({ id: result.lastInsertRowid, name: body.name, isActive: 1 }, { status: 201 });
  } catch (error: any) {
    console.error('Ошибка создания градации:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}