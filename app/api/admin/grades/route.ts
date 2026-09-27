import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ sql: 'SELECT * FROM grades' });
    
    const safeGrades = (result.rows || []).map((row: any) => {
      // Динамически находим ключи, игнорируя регистр (ID, NAME, ISACTIVE)
      const keys = Object.keys(row);
      const idKey = keys.find(k => k.toLowerCase() === 'id') || 'id';
      const nameKey = keys.find(k => k.toLowerCase() === 'name') || 'name';
      const isActiveKey = keys.find(k => k.toLowerCase() === 'isactive') || 'isActive';
      const createdAtKey = keys.find(k => k.toLowerCase().includes('created')) || 'createdAt';

      return {
        id: String(row[idKey] || crypto.randomUUID()),
        name: String(row[nameKey] || 'Без названия'),
        isActive: row[isActiveKey] ?? 1,
        createdAt: row[createdAtKey] || Date.now(),
        gradeServices: []
      };
    });

    return NextResponse.json(safeGrades);
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
      args: [body.name || 'Новая градация', 1, Date.now()]
    });
    return NextResponse.json({ 
      id: String(result.lastInsertRowid || crypto.randomUUID()), 
      name: String(body.name), 
      isActive: 1, 
      createdAt: Date.now(),
      gradeServices: [] 
    }, { status: 201 });
  } catch (error: any) {
    console.error('ADMIN GRADES POST ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
