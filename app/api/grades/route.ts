// app/api/grades/route.ts
import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: `SELECT g.id, g.name, g.isActive, g.created_at as "createdAt",
                   gs.id as gs_id, gs.gradeId, gs.serviceId, gs.price, gs.isActive as gs_isActive,
                   s.id as s_id, s.name as s_name, s.isActive as s_isActive
            FROM grades g
            LEFT JOIN grade_services gs ON g.id = gs.gradeId AND gs.isActive = 1
            LEFT JOIN services s ON gs.serviceId = s.id AND s.isActive = 1
            WHERE g.isActive = 1
            ORDER BY g.created_at ASC, s.name ASC`
    });

    const grades = [];
    const gradesMap = new Map();

    for (const row of result.rows) {
      if (!gradesMap.has(row['id'])) {
        gradesMap.set(row['id'], {
          id: row['id'],
          name: row['name'],
          isActive: row['isActive'],
          createdAt: row['createdAt'],
          gradeServices: []
        });
        grades.push(gradesMap.get(row['id']));
      }
      
      if (row['s_id']) {
        gradesMap.get(row['id']).gradeServices.push({
          id: row['gs_id'],
          gradeId: row['gradeId'],
          serviceId: row['serviceId'],
          price: row['price'],
          isActive: row['gs_isActive'],
          service: {
            id: row['s_id'],
            name: row['s_name'],
            isActive: row['s_isActive']
          }
        });
      }
    }

    return NextResponse.json(grades);
  } catch (error: any) {
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}