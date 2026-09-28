import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Делаем JOIN, чтобы сайт получил услуги и их цены для каждой градации
    const result = await client.execute({
      sql: `
        SELECT 
          g.id, g.name, g.isActive, g.created_at as "createdAt",
          gs.id as gs_id, gs.serviceId, gs.price, gs.isActive as gs_isActive,
          s.id as s_id, s.name as s_name
        FROM grades g
        LEFT JOIN grade_services gs ON g.id = gs.gradeId AND gs.isActive = 1
        LEFT JOIN services s ON gs.serviceId = s.id AND s.isActive = 1
        WHERE g.isActive = 1
        ORDER BY g.created_at ASC
      `
    });

    const gradesMap = new Map();
    const grades = [];

    for (const row of result.rows) {
      if (!gradesMap.has(row['id'])) {
        gradesMap.set(row['id'], {
          id: String(row['id']),
          name: String(row['name'] || 'Без названия'),
          isActive: row['isActive'] ?? 1,
          createdAt: row['createdAt'],
          gradeServices: []
        });
        grades.push(gradesMap.get(row['id']));
      }
      
      // Если есть привязанная активная услуга, добавляем её
      if (row['s_id']) {
        const grade = gradesMap.get(row['id']);
        grade.gradeServices.push({
          id: String(row['gs_id']),
          serviceId: String(row['serviceId']),
          price: Number(row['price']) || 0,
          isActive: Boolean(row['gs_isActive']),
          service: {
            id: String(row['s_id']),
            name: String(row['s_name'] || 'Услуга')
          }
        });
      }
    }

    return NextResponse.json(grades);
  } catch (error: any) {
    console.error('PUBLIC GRADES GET ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
