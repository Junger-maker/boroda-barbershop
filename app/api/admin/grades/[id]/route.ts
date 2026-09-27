import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Обновляем название градации
    await client.execute({
      sql: 'UPDATE grades SET name = ? WHERE id = ?',
      args: [body.name, id]
    });
    
    // Обновляем услуги и цены
    if (body.services && Array.isArray(body.services)) {
      // Удаляем старые связи
      await client.execute({
        sql: 'DELETE FROM grade_services WHERE gradeId = ?',
        args: [id]
      });
      
      // Добавляем новые связи
      for (const service of body.services) {
        await client.execute({
          sql: 'INSERT INTO grade_services (id, gradeId, serviceId, price, isActive, created_at) VALUES (?, ?, ?, ?, ?, ?)',
          args: [
            crypto.randomUUID(),
            id,
            service.serviceId,
            service.price,
            1,
            Date.now()
          ]
        });
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('GRADE PUT ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    
    // Удаляем связи с услугами
    await client.execute({
      sql: 'DELETE FROM grade_services WHERE gradeId = ?',
      args: [id]
    });
    
    // Удаляем градацию
    await client.execute({
      sql: 'DELETE FROM grades WHERE id = ?',
      args: [id]
    });
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('GRADE DELETE ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
