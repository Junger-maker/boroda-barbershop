import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: 'SELECT id, name, years, spec, initials, color, photo, gradeId, isActive, created_at as "createdAt" FROM barbers ORDER BY created_at DESC'
    });
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('ADMIN BARBERS GET ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await client.execute({
      sql: 'INSERT INTO barbers (name, years, spec, initials, color, photo, gradeId, isActive, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      args: [
        body.name,
        body.years || 0,
        body.spec || '',
        body.initials || '',
        body.color || 'bg-primary',
        body.photo || null,
        body.gradeId || null,
        1,
        Date.now()
      ]
    });
    return NextResponse.json({ id: result.lastInsertRowid, ...body }, { status: 201 });
  } catch (error: any) {
    console.error('ADMIN BARBERS POST ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
