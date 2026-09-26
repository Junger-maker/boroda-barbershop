import { createClient } from '@libsql/client/web';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = createClient({
      url: "libsql://boroda-db-junger-maker.aws-eu-west-1.turso.io",
      authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3OTA0MzM2OTQsImlkIjoiMDFhMGRlMjktMWUwMS03NmNlLWE2ZjktNWNhOWJkOTc4MjA5Iiwia2lkIjoidjhEa1RjZHVPRDZkQ3dOejV0LTBtV3JzVzB3NUI3aWdoWGczTHdpSXpwdyIsInJpZCI6IjZlMmYwZTg0LWVmMmQtNDI0My05MDViLWZjOTQ5ZTE1ODFhYiJ9.RpccCGtzHTBGMVoyy_D0EWWlCk9AJUvZhzJw-75qP4Y3vJxyynAQsvtVp2rO0c4mXGQ9aBIeWNIVCzZZhZIqBA"
    });

    const result = await client.execute(`
      SELECT b.id, b.name, b.years, b.spec, b.initials, b.color, b.photo, b.gradeId, b.isActive, b.created_at as "createdAt",
             g.name as gradeName
      FROM barbers b
      LEFT JOIN grades g ON b.gradeId = g.id
      WHERE b.isActive = 1
      ORDER BY b.created_at DESC
    `);

    const barbers = result.rows.map(row => ({
      id: row['id'], name: row['name'], years: row['years'], spec: row['spec'],
      initials: row['initials'], color: row['color'], photo: row['photo'],
      grade: row['gradeName'] ? { name: row['gradeName'] } : null
    }));

    return NextResponse.json(barbers);
  } catch (error: any) {
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
