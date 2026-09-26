import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute(`
      SELECT id, name, isActive, created_at as "createdAt"
      FROM services
      ORDER BY name ASC
    `);

    const services = result.rows.map(row => ({
      id: row['id'],
      name: row['name'],
      isActive: row['isActive'],
      createdAt: row['createdAt']
    }));

    return NextResponse.json(services);
  } catch (error: any) {
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const id = crypto.randomUUID();
    const now = Date.now();

    await client.execute({
      sql: `INSERT INTO services (id, name, isActive, created_at)
            VALUES (?, ?, ?, ?)`,
      args: [id, body.name, 1, now]
    });

    const result = await client.execute({
      sql: `SELECT id, name, isActive, created_at as "createdAt"
            FROM services WHERE id = ?`,
      args: [id]
    });

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    if (error.message?.includes('UNIQUE')) {
      return NextResponse.json({ error: 'Услуга с таким названием уже существует' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
