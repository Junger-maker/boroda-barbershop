import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute(`
      SELECT g.id, g.name, g.isActive, g.created_at as "createdAt",
             gs.id as gs_id, gs.gradeId, gs.serviceId, gs.price, gs.isActive as gs_isActive, gs.created_at as gs_createdAt,
             s.id as s_id, s.name as s_name, s.isActive as s_isActive, s.created_at as s_createdAt,
             (SELECT COUNT(*) FROM barbers WHERE gradeId = g.id) as barberCount
      FROM grades g
      LEFT JOIN grade_services gs ON g.id = gs.gradeId
      LEFT JOIN services s ON gs.serviceId = s.id
      ORDER BY g.created_at ASC
    `);

    const grades = [];
    const gradesMap = new Map();

    for (const row of result.rows) {
      if (!gradesMap.has(row['id'])) {
        gradesMap.set(row['id'], {
          id: row['id'],
          name: row['name'],
          isActive: row['isActive'],
          createdAt: row['createdAt'],
          gradeServices: [],
          _count: { barbers: row['barberCount'] }
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

    return NextResponse.json(grades);
  } catch (error: any) {
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const id = crypto.randomUUID();
    const now = Date.now();

    await client.execute({
      sql: `INSERT INTO grades (id, name, isActive, created_at)
            VALUES (?, ?, ?, ?)`,
      args: [id, body.name, 1, now]
    });

    const result = await client.execute({
      sql: `SELECT id, name, isActive, created_at as "createdAt"
            FROM grades WHERE id = ?`,
      args: [id]
    });

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    if (error.message?.includes('UNIQUE')) {
      return NextResponse.json({ error: 'Градация с таким именем уже существует' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
