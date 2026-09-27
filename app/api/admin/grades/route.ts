import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ sql: 'SELECT * FROM grades ORDER BY name ASC' });
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('ADMIN GRADES GET ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const id = crypto.randomUUID();
    const now = Date.now();

    const result = await client.execute({
      sql: 'INSERT INTO grades (id, name, isActive, created_at) VALUES (?, ?, ?, ?)',
      args: [id, body.name, 1, now]
    });

    return NextResponse.json({ id, name: body.name, isActive: 1, created_at: now }, { status: 201 });
  } catch (error: any) {
    console.error('ADMIN GRADES POST ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
