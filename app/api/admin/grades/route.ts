import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ sql: 'SELECT * FROM grades' });
    
    const grades = (result.rows || []).map((row: any) => {
      const keys = Object.keys(row);
      const idKey = keys.find(k => k.toLowerCase() === 'id') || keys[0];
      const nameKey = keys.find(k => k.toLowerCase() === 'name') || keys[1];
      
      return {
        id: String(row[idKey] || crypto.randomUUID()),
        name: String(row[nameKey] || 'Без названия'),
      };
    });

    console.log('✅ GRADES API returned:', grades);
    return NextResponse.json(grades);
  } catch (error: any) {
    console.error('❌ GRADES GET ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = body.name || body.Name || 'Новая градация';
    
    const result = await client.execute({
      sql: 'INSERT INTO grades (name) VALUES (?)',
      args: [name]
    });
    
    const newGrade = {
      id: String(result.lastInsertRowid || crypto.randomUUID()),
      name: name
    };
    
    console.log('✅ Created grade:', newGrade);
    return NextResponse.json(newGrade, { status: 201 });
  } catch (error: any) {
    console.error('❌ GRADES POST ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const id = body.id;
    const name = body.name || body.Name;
    
    if (!id || !name) {
      return NextResponse.json({ error: 'Missing id or name' }, { status: 400 });
    }
    
    await client.execute({
      sql: 'UPDATE grades SET name = ? WHERE id = ?',
      args: [name, id]
    });
    
    console.log('✅ Updated grade:', { id, name });
    return NextResponse.json({ id, name });
  } catch (error: any) {
    console.error('❌ GRADES PUT ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }
    
    await client.execute({
      sql: 'DELETE FROM grades WHERE id = ?',
      args: [id]
    });
    
    console.log('✅ Deleted grade:', id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('❌ GRADES DELETE ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
