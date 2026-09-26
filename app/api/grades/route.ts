import { createClient } from '@libsql/client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = createClient({
      url: "libsql://boroda-db-junger-maker.aws-eu-west-1.turso.io",
      authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3OTA0MzM2OTQsImlkIjoiMDFhMGRlMjktMWUwMS03NmNlLWE2ZjktNWNhOWJkOTc4MjA5Iiwia2lkIjoidjhEa1RjZHVPRDZkQ3dOejV0LTBtV3JzVzB3NUI3aWdoWGczTHdpSXpwdyIsInJpZCI6IjZlMmYwZTg0LWVmMmQtNDI0My05MDViLWZjOTQ5ZTE1ODFhYiJ9.RpccCGtzHTBGMVoyy_D0EWWlCk9AJUvZhzJw-75qP4Y3vJxyynAQsvtVp2rO0c4mXGQ9aBIeWNIVCzZZhZIqBA"
    });

    const result = await client.execute(`
      SELECT g.id, g.name, g.isActive, g.created_at as "createdAt",
             gs.id as gs_id, gs.gradeId, gs.serviceId, gs.price, gs.isActive as gs_isActive, gs.created_at as gs_createdAt,
             s.id as s_id, s.name as s_name, s.isActive as s_isActive, s.created_at as s_createdAt
      FROM grades g
      LEFT JOIN grade_services gs ON g.id = gs.gradeId AND gs.isActive = 1
      LEFT JOIN services s ON gs.serviceId = s.id AND s.isActive = 1
      WHERE g.isActive = 1
      ORDER BY g.created_at ASC, s.name ASC
    `);

    const grades = [];
    const gradesMap = new Map();

    for (const row of result.rows) {
      if (!gradesMap.has(row['id'])) {
        gradesMap.set(row['id'], { id: row['id'], name: row['name'], isActive: row['isActive'], createdAt: row['createdAt'], gradeServices: [] });
        grades.push(gradesMap.get(row['id']));
      }
      if (row['s_id']) {
        gradesMap.get(row['id']).gradeServices.push({
          id: row['gs_id'], gradeId: row['gradeId'], serviceId: row['serviceId'], price: row['price'],
          isActive: row['gs_isActive'], createdAt: row['gs_createdAt'],
          service: { id: row['s_id'], name: row['s_name'], isActive: row['s_isActive'], createdAt: row['s_createdAt'] }
        });
      }
    }
    return NextResponse.json(grades);
  } catch (error: any) {
    return NextResponse.json({ error: 'Ошибка сервера', details: error.message }, { status: 500 });
  }
}
