import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    console.log('🔍 GRADE PUT PAYLOAD:', { id, servicesCount: body.services?.length });

    // 1. Обновляем название градации
    await client.execute({
      sql: 'UPDATE grades SET name = ? WHERE id = ?',
      args: [body.name, id]
    });
    
    // 2. Если пришли услуги с ценами, обновляем их
    if (body.services && Array.isArray(body.services)) {
      // Сначала удаляем старые привязки для этой градации
      await client.execute({
        sql: 'DELETE FROM grade_services WHERE gradeId = ?',
        args: [id]
      });
      
      // Затем добавляем новые
      for (const s of body.services) {
        const serviceId = s.serviceId || s.id;
        
        if (!serviceId) {
          console.warn('⚠️ Пропущена услуга без serviceId:', s);
          continue; // Пропускаем некорректные данные
        }
        
        try {
          await client.execute({
            sql: 'INSERT INTO grade_services (id, gradeId, serviceId, price, isActive, created_at) VALUES (?, ?, ?, ?, ?, ?)',
            args: [
              crypto.randomUUID(),
              String(id),
              String(serviceId),
              Number(s.price) || 0,
              s.isActive ? 1 : 0,
              Date.now()
            ]
          });
        } catch (insertError: any) {
          console.error('❌ Ошибка вставки grade_services:', insertError.message, { gradeId: id, serviceId });
          throw new Error(`Не удалось привязать услугу (ID: ${serviceId}). Возможно, она была удалена из базы.`);
        }
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('GRADE PUT ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await client.execute({ sql: 'DELETE FROM grade_services WHERE gradeId = ?', args: [id] });
    await client.execute({ sql: 'DELETE FROM grades WHERE id = ?', args: [id] });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('GRADE DELETE ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
