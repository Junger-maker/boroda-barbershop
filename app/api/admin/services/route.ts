import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ sql: 'SELECT * FROM services' });
    
    // Принудительно маппим на правильные имена полей
    const services = (result.rows || []).map((row: any) => {
      const keys = Object.keys(row);
      const idKey = keys.find(k => k.toLowerCase() === 'id') || keys[0];
      const nameKey = keys.find(k => k.toLowerCase() === 'name') || keys[1];
      
      return {
        id: String(row[idKey] || crypto.randomUUID()),
        name: String(row[nameKey] || 'Без названия'),
      };
    });

    console.log('✅ SERVICES API returned:', services);
    return NextResponse.json(services);
  } catch (error: any) {
    console.error('❌ SERVICES GET ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = body.name || body.Name || 'Новая услуга';
    
    const result = await client.execute({
      sql: 'INSERT INTO services (name) VALUES (?)',
      args: [name]
    });
    
    const newService = {
      id: String(result.lastInsertRowid || crypto.randomUUID()),
      name: name
    };
    
    console.log('✅ Created service:', newService);
    return NextResponse.json(newService, { status: 201 });
  } catch (error: any) {
    console.error('❌ SERVICES POST ERROR:', error.message);
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
      sql: 'UPDATE services SET name = ? WHERE id = ?',
      args: [name, id]
    });
    
    console.log('✅ Updated service:', { id, name });
    return NextResponse.json({ id, name });
  } catch (error: any) {
    console.error('❌ SERVICES PUT ERROR:', error.message);
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
      sql: 'DELETE FROM services WHERE id = ?',
      args: [id]
    });
    
    console.log('✅ Deleted service:', id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('❌ SERVICES DELETE ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
