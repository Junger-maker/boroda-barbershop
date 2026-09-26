import { createClient } from '@libsql/client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = createClient({
      url: "libsql://boroda-db-junger-maker.aws-eu-west-1.turso.io",
      authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3OTA0MzM2OTQsImlkIjoiMDFhMGRlMjktMWUwMS03NmNlLWE2ZjktNWNhOWJkOTc4MjA5Iiwia2lkIjoidjhEa1RjZHVPRDZkQ3dOejV0LTBtV3JzVzB3NUI3aWdoWGczTHdpSXpwdyIsInJpZCI6IjZlMmYwZTg0LWVmMmQtNDI0My05MDViLWZjOTQ5ZTE1ODFhYiJ9.RpccCGtzHTBGMVoyy_D0EWWlCk9AJUvZhzJw-75qP4Y3vJxyynAQsvtVp2rO0c4mXGQ9aBIeWNIVCzZZhZIqBA"
    });

    const result = await client.execute(`
      SELECT id, name, isActive, created_at as "createdAt"
      FROM services
      WHERE isActive = 1
      ORDER BY name ASC
    `);

    const services = result.rows.map(row => ({
      id: row['id'], name: row['name'], isActive: row['isActive'], createdAt: row['createdAt']
    }));

    return NextResponse.json(services);
  } catch (error: any) {
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
