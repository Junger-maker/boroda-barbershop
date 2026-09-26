import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ 
      sql: `SELECT b.id, b.name, b.years, b.spec, b.initials, b.color, b.photo, b.gradeId, b.isActive, b.created_at as "createdAt",
                   g.name as gradeName
            FROM barbers b
            LEFT JOIN grades g ON b.gradeId = g.id
            ORDER BY b.created_at DESC`, 
      args: [] 
    });

    const barbers = result.rows.map(row => ({
      id: row['id'],
      name: row['name'],
      years: row['years'],
      spec: row['spec'],
      initials: row['initials'],
      color: row['color'],
      photo: row['photo'],
      gradeId: row['gradeId'],
      isActive: row['isActive'],
      createdAt: row['createdAt'],
      grade: row['gradeName'] ? { name: row['gradeName'] } : null
    }));

    return NextResponse.json(barbers);
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
      sql: `INSERT INTO barbers (id, name, years, spec, initials, color, photo, gradeId, isActive, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [id, body.name, body.years || 0, body.spec || '', body.initials || '', body.color || 'bg-primary', body.photo || null, body.gradeId || null, 1, now]
    });

    const result = await client.execute({
      sql: `SELECT id, name, years, spec, initials, color, photo, gradeId, isActive, created_at as "createdAt"
            FROM barbers WHERE id = ?`,
      args: [id]
    });

    const barber = result.rows[0];
    return NextResponse.json({
      ...barber,
      createdAt: barber['createdAt']
    });
  } catch (error: any) {
    if (error.message?.includes('UNIQUE')) {
      return NextResponse.json({ error: 'Барбер с таким именем уже существует' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}