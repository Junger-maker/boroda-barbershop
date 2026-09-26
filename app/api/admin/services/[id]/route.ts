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
      sql: `UPDATE services 
            SET name = ?, isActive = ?
            WHERE id = ?`,
      args: [body.name, body.isActive !== undefined ? (body.isActive ? 1 : 0) : 1, id]
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await client.execute({
      sql: `DELETE FROM services WHERE id = ?`,
      args: [id]
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
