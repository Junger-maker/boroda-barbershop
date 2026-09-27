import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({
      sql: 'SELECT id, name, years, spec, initials, color, photo, gradeId, isActive, created_at FROM barbers ORDER BY created_at DESC'
    });
    
    const safeBarbers = (result.rows || []).map((row: any) => ({
      id: String(row['id'] || row['ID'] || crypto.randomUUID()),
      name: String(row['name'] || row['NAME'] || 'Мастер'),
      years: row['years'] ?? row['YEARS'] ?? 0,
      spec: String(row['spec'] || row['SPEC'] || ''),
      initials: String(row['initials'] || row['INITIALS'] || ''),
      color: String(row['color'] || row['COLOR'] || 'bg-primary'),
      photo: row['photo'] || row['PHOTO'] || null,
      gradeId: row['gradeId'] || row['GRADEID'] || null,
      isActive: row['isActive'] ?? row['ISACTIVE'] ?? 1,
      createdAt: row['created_at'] || row['createdAt'] || Date.now(),
      // Создаём безопасный объект grade для фронтенда
      grade: row['gradeName'] || row['GRADENAME'] ? { name: String(row['gradeName'] || row['GRADENAME']) } : null
    }));

    return NextResponse.json(safeBarbers);
  } catch (error: any) {
    console.error('ADMIN BARBERS GET ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await client.execute({
      sql: 'INSERT INTO barbers (name, years, spec, initials, color, photo, gradeId, isActive, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      args: [
        body.name || '', 
        body.years || 0, 
        body.spec || '', 
        body.initials || '', 
        body.color || 'bg-primary', 
        body.photo || null, 
        body.gradeId || null, 
        1, 
        Date.now()
      ]
    });
    
    return NextResponse.json({ 
      id: String(result.lastInsertRowid || crypto.randomUUID()), 
      ...body, 
      isActive: 1 
    }, { status: 201 });
  } catch (error: any) {
    console.error('ADMIN BARBERS POST ERROR:', error.message);
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
