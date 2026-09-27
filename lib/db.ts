// CACHE BUSTER: 8f3a9b2c-4d1e-4a5b-9c8d-7e6f5a4b3c2d
type ExecuteOptions = { sql: string; args?: (string | number | null | boolean)[] };
type ExecuteResult = { rows: Record<string, any>[]; columns: string[]; rowsAffected: number; lastInsertRowid: number | bigint | null };

async function execute(options: ExecuteOptions): Promise<ExecuteResult> {
  const dbUrl = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;
  if (!dbUrl || !authToken) throw new Error('Missing TURSO env vars');

  const httpUrl = dbUrl.replace('libsql://', 'https://') + '/v2/pipeline';
  const formattedArgs = (options.args || []).map((arg) => {
    if (arg === null || arg === undefined) return { type: 'null' as const, value: null };
    if (typeof arg === 'boolean') return { type: 'integer' as const, value: arg ? 1 : 0 };
    if (typeof arg === 'number') return Number.isInteger(arg) ? { type: 'integer' as const, value: arg.toString() } : { type: 'float' as const, value: arg.toString() };
    return { type: 'text' as const, value: String(arg) };
  });

  const response = await fetch(httpUrl, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ requests: [{ type: 'execute', stmt: { sql: options.sql, ...(formattedArgs.length > 0 ? { args: formattedArgs } : {}) } }, { type: 'close' }] }),
  });

  if (!response.ok) throw new Error(`Turso HTTP API error: ${response.status} ${await response.text()}`);
  const data = await response.json();
  const executeResult = data.results?.[0];
  if (executeResult?.type !== 'ok' || executeResult.response?.type !== 'execute') throw new Error(`Unexpected Turso response: ${JSON.stringify(data)}`);

  const result = executeResult.response.result;
  
  // 1. Надёжное извлечение имён колонок (обрабатывает и строки, и объекты {name: "..."})
  const columnNames = (result.cols || []).map((col: any) => {
    if (typeof col === 'object' && col !== null && 'name' in col) return String(col.name);
    return String(col);
  });

  // 2. Надёжное преобразование строк в объекты
  const rows = (result.rows || []).map((row: any) => {
    const obj: Record<string, any> = {};
    if (Array.isArray(row)) {
      columnNames.forEach((colName: string, index: number) => {
        let val = row[index];
        // Извлекаем чистое значение, если оно завёрнуто в {type: "...", value: "..."}
        if (typeof val === 'object' && val !== null && 'value' in val) {
          val = val.value;
        }
        obj[colName] = val;
      });
    }
    return obj;
  });

  return { rows, columns: columnNames, rowsAffected: result.affected_row_count || 0, lastInsertRowid: result.last_insert_rowid || null };
}

export default { execute };
