import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Простой запрос без сложных JOIN, чтобы исключить ошибки
    const result = await client.execute({
      sql: 'SELECT id, name, isActive, created_at FROM grades ORDER BY created_at ASC'
    });

    // Принудительно приводим к строке и проверяем оба регистра (id / ID)
    const grades = (result.rows || []).map((row: any) => ({
      id: String(row['id'] || row['ID'] || crypto.randomUUID()),
      name: String(row['name'] || row['NAME'] || 'Без названия'),
      isActive: row['isActive'] ?? row['ISACTIVE'] ?? 1,
      createdAt: row['created_at'] || row['createdAt'] || Date.now(),
      gradeServices: [] // Пока возвращаем пустой массив, чтобы фронтенд гарантированно не падал на .map
    }));

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
