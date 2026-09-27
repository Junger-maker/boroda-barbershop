import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ sql: 'SELECT * FROM grades' });
    return NextResponse.json(result.rows || []);
  } catch (error: any) {
    console.error('GRADES GET ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await client.execute({
      sql: 'INSERT INTO grades (name, isActive, created_at) VALUES (?, ?, ?)',
      args: [body.name, 1, Date.now()]
    });
    
    const grades = await client.execute({ sql: 'SELECT * FROM grades ORDER BY created_at DESC LIMIT 1' });
    return NextResponse.json(grades.rows[0] || {}, { status: 201 });
  } catch (error: any) {
    console.error('GRADES POST ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    await client.execute({
      sql: 'UPDATE grades SET name = ? WHERE id = ?',
      args: [body.name, body.id]
    });
    
    const grades = await client.execute({ sql: 'SELECT * FROM grades WHERE id = ?', args: [body.id] });
    return NextResponse.json(grades.rows[0] || {});
  } catch (error: any) {
    console.error('GRADES PUT ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    await client.execute({ sql: 'DELETE FROM grades WHERE id = ?', args: [id] });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('GRADES DELETE ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
