import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    await client.execute({
      sql: 'UPDATE barbers SET name = ?, years = ?, spec = ?, initials = ?, photo = ?, gradeId = ? WHERE id = ?',
      args: [body.name, body.years || 0, body.spec || '', body.initials || '', body.photo || null, body.gradeId || null, id]
    });
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('ADMIN BARBER PUT ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await client.execute({ sql: 'DELETE FROM barbers WHERE id = ?', args: [id] });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('ADMIN BARBER DELETE ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
