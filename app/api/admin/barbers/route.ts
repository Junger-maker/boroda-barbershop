import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await client.execute({ sql: 'SELECT * FROM barbers' });
    
    const barbers = (result.rows || []).map((row: any) => {
      const keys = Object.keys(row);
      const idKey = keys.find(k => k.toLowerCase() === 'id') || keys[0];
      const nameKey = keys.find(k => k.toLowerCase() === 'name') || keys[1];
      const yearsKey = keys.find(k => k.toLowerCase() === 'years') || keys[2];
      const photoKey = keys.find(k => k.toLowerCase().includes('photo')) || keys[3];
      
      return {
        id: String(row[idKey] || crypto.randomUUID()),
        name: String(row[nameKey] || 'Мастер'),
        years: Number(row[yearsKey]) || 0,
        photo: row[photoKey] || null,
      };
    });

    console.log('✅ BARBERS API returned:', barbers);
    return NextResponse.json(barbers);
  } catch (error: any) {
    console.error('❌ BARBERS GET ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = body.name || body.Name || 'Мастер';
    const years = Number(body.years) || 0;
    const photo = body.photo || null;
    
    const result = await client.execute({
      sql: 'INSERT INTO barbers (name, years, photo) VALUES (?, ?, ?)',
      args: [name, years, photo]
    });
    
    const newBarber = {
      id: String(result.lastInsertRowid || crypto.randomUUID()),
      name,
      years,
      photo
    };
    
    console.log('✅ Created barber:', newBarber);
    return NextResponse.json(newBarber, { status: 201 });
  } catch (error: any) {
    console.error('❌ BARBERS POST ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const id = body.id;
    const name = body.name || body.Name;
    const years = Number(body.years) || 0;
    const photo = body.photo || null;
    
    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }
    
    await client.execute({
      sql: 'UPDATE barbers SET name = ?, years = ?, photo = ? WHERE id = ?',
      args: [name, years, photo, id]
    });
    
    console.log('✅ Updated barber:', { id, name, years });
    return NextResponse.json({ id, name, years, photo });
  } catch (error: any) {
    console.error('❌ BARBERS PUT ERROR:', error.message);
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
      sql: 'DELETE FROM barbers WHERE id = ?',
      args: [id]
    });
    
    console.log('✅ Deleted barber:', id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('❌ BARBERS DELETE ERROR:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
