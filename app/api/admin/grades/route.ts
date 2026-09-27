import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Самый простой и надёжный запрос
    const result = await client.execute({
      sql: 'SELECT * FROM grades ORDER BY created_at ASC'
    });
    
    // Гарантируем, что фронтенд получит массив с нужными полями
    const safeGrades = result.rows.map((row: any) => ({
      id: row['id'] || crypto.randomUUID(),
      name: row['name'] || 'Без названия',
      isActive: row['isActive'] ?? 1,
      createdAt: row['created_at'] || row['createdAt'] || Date.now(),
      gradeServices: [] // Пока возвращаем пустой массив, чтобы фронтенд не падал на .map
    }));

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
      id: result.lastInsertRowid || crypto.randomUUID(), 
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
