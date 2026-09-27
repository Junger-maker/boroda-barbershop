import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: `
        SELECT b.id, b.name, b.years, b.spec, b.initials, b.color, b.photo, b.gradeId, b.isActive, b.created_at as "createdAt", g.name as "gradeName" 
        FROM barbers b 
        LEFT JOIN grades g ON b.gradeId = g.id 
        WHERE b.isActive = 1 
        ORDER BY b.created_at DESC
      `
    });
    
    const barbers = result.rows.map((row: any) => ({
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
      // Формируем объект grade, который ждёт фронтенд
      grade: row['gradeName'] ? { name: row['gradeName'] } : null
    }));

    return NextResponse.json(barbers);
    } catch (error: any) {
    console.error('BARBERS GET ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
