import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: `SELECT id, name, years, spec, initials, color, photo, gradeId, isActive, created_at as "createdAt" 
            FROM barbers 
            WHERE isActive = 1 
            ORDER BY created_at DESC`
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
      createdAt: row['createdAt']
    }));

    return NextResponse.json(barbers);
  } catch (error: any) {
    console.error('Ошибка получения барберов:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}