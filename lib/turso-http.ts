const TURSO_URL = process.env.TURSO_DATABASE_URL!;
const TURSO_TOKEN = process.env.TURSO_AUTH_TOKEN!;

export async function executeQuery(sql: string, args: any[] = []) {
  const response = await fetch(`${TURSO_URL}/v2/pipeline`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TURSO_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      statements: [{ sql, args: args.map(a => ({ value: a })) }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Turso error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results[0];
}

export async function query(sql: string, args: any[] = []) {
  const result = await executeQuery(sql, args);
  return result.rows || [];
}