type ExecuteOptions = {
  sql: string;
  args?: (string | number | null | boolean)[];
};

type ExecuteResult = {
  rows: Record<string, any>[];
  columns: string[];
  rowsAffected: number;
  lastInsertRowid: number | bigint | null;
};

async function execute(options: ExecuteOptions): Promise<ExecuteResult> {
  const dbUrl = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!dbUrl || !authToken) {
    throw new Error('Отсутствуют переменные окружения TURSO_DATABASE_URL или TURSO_AUTH_TOKEN');
  }

  const httpUrl = dbUrl.replace('libsql://', 'https://') + '/v2/pipeline';

  const formattedArgs = (options.args || []).map((arg) => {
    if (arg === null || arg === undefined) return { type: 'null' as const, value: null };
    if (typeof arg === 'boolean') return { type: 'integer' as const, value: arg ? 1 : 0 };
    if (typeof arg === 'number') {
      return Number.isInteger(arg) 
        ? { type: 'integer' as const, value: arg.toString() }
        : { type: 'float' as const, value: arg.toString() };
    }
    return { type: 'text' as const, value: String(arg) };
  });

  const payload = {
    requests: [
      {
        type: 'execute',
        stmt: {
          sql: options.sql,
          ...(formattedArgs.length > 0 ? { args: formattedArgs } : {}),
        },
      },
      { type: 'close' },
    ],
  };

  const response = await fetch(httpUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Ошибка Turso HTTP API: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  
  const executeResult = data.results?.[0];
  if (executeResult?.type !== 'ok' || executeResult.response?.type !== 'execute') {
    throw new Error(`Неожиданный ответ от Turso: ${JSON.stringify(data)}`);
  }

  const result = executeResult.response.result;
  
  // Гарантированно безопасное преобразование строк БД в объекты
  const rows = result.rows.map((row: any[]) => {
    const obj: Record<string, any> = {};
    result.cols.forEach((col: string, index: number) => {
      obj[String(col)] = row[index];
    });
    return obj;
  });

  return {
    rows,
    columns: result.cols.map(String),
    rowsAffected: result.affected_row_count,
    lastInsertRowid: result.last_insert_rowid,
  };
}

export default {
  execute,
};
