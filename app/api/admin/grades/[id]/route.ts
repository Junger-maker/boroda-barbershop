import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    console.log('🔍 GRADE PUT START:', { id, servicesCount: body.services?.length });

    // 1. Обновляем название градации
    await client.execute({
      sql: 'UPDATE grades SET name = ? WHERE id = ?',
      args: [body.name, id]
    });
    
    // 2. ЖЕСТКО удаляем ВСЕ старые привязки услуг для этой градации
    const deleteResult = await client.execute({
      sql: 'DELETE FROM grade_services WHERE gradeId = ?',
      args: [id]
    });
    console.log('🗑️ Deleted old grade_services:', deleteResult.rowsAffected);
    
    // 3. Если пришли новые услуги, добавляем их
    if (body.services && Array.isArray(body.services) && body.services.length > 0) {
      for (const s of body.services) {
        const serviceId = s.serviceId || s.id;
        
        if (!serviceId || typeof serviceId !== 'string' || serviceId === '[object Object]') {
          console.warn('⚠️ Пропущена некорректная услуга:', s);
          continue;
        }
        
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
      }
    }
    
    console.log('✅ GRADE PUT SUCCESS');
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('❌ GRADE PUT ERROR:', error.message);
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
