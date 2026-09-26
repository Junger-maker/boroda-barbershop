import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    await client.execute({
      sql: `UPDATE barbers 
            SET name = ?, years = ?, spec = ?, initials = ?, color = ?, photo = ?, gradeId = ?, isActive = ?
            WHERE id = ?`,
      args: [
        body.name,
        body.years || 0,
        body.spec || '',
        body.initials || '',
        body.color || 'bg-primary',
        body.photo || null,
        body.gradeId || null,
        body.isActive !== undefined ? (body.isActive ? 1 : 0) : 1,
        id
      ]
    });

    const result = await client.execute({
      sql: `SELECT b.id, b.name, b.years, b.spec, b.initials, b.color, b.photo, b.gradeId, b.isActive, b.created_at as "createdAt",
                   g.name as gradeName
            FROM barbers b
            LEFT JOIN grades g ON b.gradeId = g.id
            WHERE b.id = ?`,
      args: [id]
    });

    const barber = result.rows[0];
    return NextResponse.json({
      ...barber,
      grade: barber['gradeName'] ? { name: barber['gradeName'] } : null
    });
  } catch (error: any) {
    if (error.message?.includes('UNIQUE')) {
      return NextResponse.json({ error: 'Барбер с таким именем уже существует' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await client.execute({
      sql: `DELETE FROM barbers WHERE id = ?`,
      args: [id]
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
