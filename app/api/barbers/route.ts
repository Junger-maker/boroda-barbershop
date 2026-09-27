import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: `SELECT b.*, g.name as gradeName FROM barbers b LEFT JOIN grade_services gs ON b.id = gs.barber_id LEFT JOIN grades g ON gs.grade_id = g.id`
    });
    
    // Группируем барберов по id и собираем их градации
    const barbersMap = new Map();
    result.rows.forEach((row: any) => {
      if (!barbersMap.has(row.id)) {
        barbersMap.set(row.id, { ...row, grades: [] });
      }
      if (row.gradeName) {
        barbersMap.get(row.id).grades.push({ name: row.gradeName });
      }
    });
    
    const barbers = Array.from(barbersMap.values());
    return NextResponse.json(barbers);
  } catch (error: any) {
    console.error('Ошибка получения барберов:', error);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, photo_url, description, grades } = body;
    
    const result = await client.execute({
      sql: 'INSERT INTO barbers (name, photo_url, description) VALUES (?, ?, ?)',
      args: [name, photo_url || null, description || null]
    });
    
    const barberId = result.lastInsertRowid;
    
    // Привязываем градации
    if (grades && grades.length > 0) {
      for (const grade of grades) {
        await client.execute({
          sql: 'INSERT INTO grade_services (barber_id, grade_id) VALUES (?, ?)',
          args: [barberId, grade.id]
        });
      }
    }
    
    return NextResponse.json({ id: barberId, message: 'Барбер создан' }, { status: 201 });
  } catch (error: any) {
    console.error('Ошибка создания барбера:', error);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}