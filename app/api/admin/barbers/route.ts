import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ sql: 'SELECT * FROM barbers' });
    return NextResponse.json(result.rows || []);
  } catch (error: any) {
    console.error('BARBERS GET ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await client.execute({
      sql: 'INSERT INTO barbers (name, years, spec, initials, color, photo, gradeId, isActive, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      args: [body.name, body.years || 0, body.spec || '', body.initials || '', body.color || 'bg-primary', body.photo || null, body.gradeId || null, 1, Date.now()]
    });
    
    // Получаем созданную запись
    const barbers = await client.execute({ sql: 'SELECT * FROM barbers ORDER BY created_at DESC LIMIT 1' });
    return NextResponse.json(barbers.rows[0] || {}, { status: 201 });
  } catch (error: any) {
    console.error('BARBERS POST ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    await client.execute({
      sql: 'UPDATE barbers SET name = ?, years = ?, spec = ?, initials = ?, color = ?, photo = ?, gradeId = ? WHERE id = ?',
      args: [body.name, body.years || 0, body.spec || '', body.initials || '', body.color || 'bg-primary', body.photo || null, body.gradeId || null, body.id]
    });
    
    const barbers = await client.execute({ sql: 'SELECT * FROM barbers WHERE id = ?', args: [body.id] });
    return NextResponse.json(barbers.rows[0] || {});
  } catch (error: any) {
    console.error('BARBERS PUT ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    await client.execute({ sql: 'DELETE FROM barbers WHERE id = ?', args: [id] });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('BARBERS DELETE ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
