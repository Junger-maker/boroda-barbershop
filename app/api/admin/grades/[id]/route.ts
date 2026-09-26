import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Обновляем название градации
    await client.execute({
      sql: `UPDATE grades SET name = ? WHERE id = ?`,
      args: [body.name, id]
    });

    // Обновляем услуги и цены
    if (body.services && Array.isArray(body.services)) {
      // Удаляем старые связи
      await client.execute({
        sql: `DELETE FROM grade_services WHERE gradeId = ?`,
        args: [id]
      });

      // Создаём новые связи
      for (const service of body.services) {
        if (service.isActive) {
          const gsId = crypto.randomUUID();
          const now = Date.now();
          await client.execute({
            sql: `INSERT INTO grade_services (id, gradeId, serviceId, price, isActive, created_at)
                  VALUES (?, ?, ?, ?, ?, ?)`,
            args: [gsId, id, service.id, Number(service.price) || 0, 1, now]
          });
        }
      }
    }

    // Возвращаем обновлённую градацию
    const result = await client.execute({
      sql: `SELECT g.id, g.name, g.isActive, g.created_at as "createdAt",
                   gs.id as gs_id, gs.gradeId, gs.serviceId, gs.price, gs.isActive as gs_isActive, gs.created_at as gs_createdAt,
                   s.id as s_id, s.name as s_name, s.isActive as s_isActive, s.created_at as s_createdAt
            FROM grades g
            LEFT JOIN grade_services gs ON g.id = gs.gradeId
            LEFT JOIN services s ON gs.serviceId = s.id
            WHERE g.id = ?`,
      args: [id]
    });

    const grade = {
      id: result.rows[0]['id'],
      name: result.rows[0]['name'],
      isActive: result.rows[0]['isActive'],
      createdAt: result.rows[0]['createdAt'],
      gradeServices: []
    };

    for (const row of result.rows) {
      if (row['s_id']) {
        grade.gradeServices.push({
          id: row['gs_id'],
          gradeId: row['gradeId'],
          serviceId: row['serviceId'],
          price: row['price'],
          isActive: row['gs_isActive'],
          createdAt: row['gs_createdAt'],
          service: {
            id: row['s_id'],
            name: row['s_name'],
            isActive: row['s_isActive'],
            createdAt: row['s_createdAt']
          }
        });
      }
    }

    return NextResponse.json(grade);
  } catch (error: any) {
    if (error.message?.includes('UNIQUE')) {
      return NextResponse.json({ error: 'Градация с таким именем уже существует' }, { status: 400 });
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
      sql: `DELETE FROM grades WHERE id = ?`,
      args: [id]
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
