import client from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const serviceId = searchParams.get('serviceId');

    let sql = `
      SELECT b.id, b.name, b.years, b.photo, b.gradeId, g.name as "gradeName"
      FROM barbers b
      LEFT JOIN grades g ON b.gradeId = g.id
      WHERE b.isActive = 1
    `;
    
    const args: (string | number | null | boolean)[] = [];

    // Если передан ID услуги, фильтруем барберов через EXISTS
    if (serviceId) {
      sql += `
        AND EXISTS (
          SELECT 1 FROM grade_services gs 
          WHERE gs.gradeId = b.gradeId 
          AND gs.serviceId = ? 
          AND gs.isActive = 1
        )
      `;
      args.push(serviceId);
    }

    sql += ' ORDER BY b.created_at DESC';

    const result = await client.execute({ sql, args });
    
    const barbers = result.rows.map((row: any) => ({
      id: String(row['id']),
      name: String(row['name']),
      years: Number(row['years']) || 0,
      photo: row['photo'] || null,
      gradeId: row['gradeId'] || null,
      grade: row['gradeName'] ? { name: String(row['gradeName']) } : null
    }));

    return NextResponse.json(barbers);
  } catch (error: any) {
    console.error('BARBERS GET ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
