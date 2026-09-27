// app/api/services/route.ts
import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: `SELECT id, name, isActive, created_at as "createdAt" FROM services WHERE isActive = 1 ORDER BY name ASC`
    });

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