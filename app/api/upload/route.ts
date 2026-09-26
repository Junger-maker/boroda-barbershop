import prisma from '@/lib/prisma';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'Файл не загружен' }, { status: 400 });
    }

    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Можно загружать только изображения' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uniqueName = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
    const filePath = path.join(process.cwd(), 'public', 'uploads', 'barbers', uniqueName);
    
    await writeFile(filePath, buffer);
    
    const photoUrl = `/uploads/barbers/${uniqueName}`;
    
    return NextResponse.json({ url: photoUrl });
  } catch (error) {
    console.error('Ошибка загрузки фото:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
