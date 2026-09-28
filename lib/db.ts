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
  
  const columnNames = (result.cols || []).map((col: any) => {
    if (typeof col === 'object' && col !== null && 'name' in col) return String(col.name);
    return String(col);
  });

  const rows = (result.rows || []).map((row: any) => {
    const obj: Record<string, any> = {};
    
    // Вариант А: Turso вернул массив массивов (стандарт)
    if (Array.isArray(row)) {
      columnNames.forEach((colName: string, index: number) => {
        let val = row[index];
        if (typeof val === 'object' && val !== null && 'value' in val) val = val.value;
        if (colName !== '[object Object]') obj[colName] = val;
      });
    } 
    // Вариант Б: Turso вернул массив объектов (редкий случай)
    else if (typeof row === 'object' && row !== null) {
      let validColIndex = 0;
      for (const key in row) {
        let val = row[key];
        if (typeof val === 'object' && val !== null && 'value' in val) val = val.value;
        
        if (key !== '[object Object]') {
          obj[key] = val;
        } else {
          // Если ключ сломан, восстанавливаем его по порядку из columnNames
          if (validColIndex < columnNames.length) {
            obj[columnNames[validColIndex]] = val;
          }
          validColIndex++;
        }
      }
    }
    return obj;
  });

  return { rows, columns: columnNames, rowsAffected: result.affected_row_count || 0, lastInsertRowid: result.last_insert_rowid || null };
}

export default { execute };
console.log("🚀 VERCEL REBUILD CONFIRMED: 9f8e7d6c-5b4a-3c2d-1e0f");
