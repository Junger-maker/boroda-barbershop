import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('🔍 GRADES API: Начинаем запрос...');
    
    // Самый простой запрос - просто SELECT *
    const result = await client.execute({
      sql: 'SELECT * FROM grades'
    });
    
    console.log('🔍 GRADES API: Результат из БД:', JSON.stringify(result.rows, null, 2));
    console.log(' GRADES API: Колонки:', result.columns);
    
    // Возвращаем всё как есть
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('❌ GRADES API ERROR:', error.message);
    console.error('Full error:', error);
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
      id: result.lastInsertRowid, 
      name: body.name, 
      isActive: 1, 
      createdAt: Date.now()
    }, { status: 201 });
  } catch (error: any) {
    console.error('❌ GRADES POST ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
