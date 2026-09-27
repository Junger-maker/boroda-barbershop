import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    await client.execute({
      sql: 'UPDATE services SET name = ?, isActive = ? WHERE id = ?',
      args: [body.name, body.isActive !== undefined ? (body.isActive ? 1 : 0) : 1, id]
    });
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('SERVICE PUT ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await client.execute({ sql: 'DELETE FROM services WHERE id = ?', args: [id] });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('SERVICE DELETE ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
