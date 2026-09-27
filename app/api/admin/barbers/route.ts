import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ sql: 'SELECT * FROM barbers ORDER BY created_at DESC' });
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('ADMIN BARBERS GET ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const id = crypto.randomUUID();
    const now = Date.now();
    
    const result = await client.execute({
      sql: 'INSERT INTO barbers (id, name, years, spec, initials, photo, gradeId, isActive, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      args: [id, body.name || '', body.years || 0, body.spec || '', body.initials || '', body.photo || null, body.gradeId || null, 1, now]
    });
    
    return NextResponse.json({ id, ...body, isActive: 1, created_at: now }, { status: 201 });
  } catch (error: any) {
    console.error('ADMIN BARBERS POST ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
