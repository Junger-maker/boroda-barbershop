import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: `
        SELECT 
          g.id, g.name, g.isActive, g.created_at as "createdAt",
          gs.id as gs_id, gs.gradeId, gs.serviceId, gs.price, gs.isActive as gs_isActive, gs.created_at as gs_createdAt,
          s.id as s_id, s.name as s_name, s.isActive as s_isActive, s.created_at as s_createdAt
        FROM grades g
        LEFT JOIN grade_services gs ON g.id = gs.gradeId
        LEFT JOIN services s ON gs.serviceId = s.id
        ORDER BY g.created_at ASC
      `
    });

    const gradesMap = new Map();
    const grades = [];

    for (const row of result.rows) {
      if (!gradesMap.has(row['id'])) {
        const grade = {
          id: row['id'],
          name: row['name'] || 'Без названия',
          isActive: row['isActive'],
          createdAt: row['createdAt'],
          gradeServices: []
        };
        gradesMap.set(row['id'], grade);
        grades.push(grade);
      }
      
      if (row['s_id']) {
        const grade = gradesMap.get(row['id']);
        grade.gradeServices.push({
          id: row['gs_id'],
          gradeId: row['gradeId'],
          serviceId: row['serviceId'],
          price: row['price'],
          isActive: row['gs_isActive'],
          createdAt: row['gs_createdAt'],
          service: {
            id: row['s_id'],
            name: row['s_name'] || 'Удаленная услуга', // ЗАЩИТА ОТ NULL
            isActive: row['s_isActive'],
            createdAt: row['s_createdAt']
          }
        });
      }
    }

    return NextResponse.json(grades);
  } catch (error: any) {
    console.error('ADMIN GRADES GET ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await client.execute({
      sql: 'INSERT INTO grades (name, isActive, created_at) VALUES (?, ?, ?)',
      args: [body.name, 1, Date.now()]
    });
    return NextResponse.json({ 
      id: result.lastInsertRowid, 
      name: body.name, 
      isActive: 1, 
      createdAt: Date.now(),
      gradeServices: [] 
    }, { status: 201 });
  } catch (error: any) {
    console.error('ADMIN GRADES POST ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
