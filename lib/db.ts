// lib/db.ts

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

  // Преобразуем libsql:// в https:// для HTTP API
  const httpUrl = dbUrl.replace('libsql://', 'https://') + '/v2/pipeline';

  // Форматируем аргументы для Turso HTTP API
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
  
  // ИСПРАВЛЕНИЕ ЗДЕСЬ:
  // result.cols - это массив объектов { name: "id", type: "text" } или просто строк?
  // В зависимости от версии API, cols могут быть объектами. Нам нужно получить имена колонок.
  const columnNames = result.cols.map((col: any) => {
    // Если col это объект с полем name, берем его
    if (typeof col === 'object' && col.name) {
      return col.name;
    }
    // Если col это строка, возвращаем её
    return String(col);
  });

  // Маппим строки БД в объекты JS
  const rows = result.rows.map((row: any[]) => {
    const obj: Record<string, any> = {};
    columnNames.forEach((colName: string, index: number) => {
      obj[colName] = row[index];
    });
    return obj;
  });

  return {
    rows,
    columns: columnNames,
    rowsAffected: result.affected_row_count,
    lastInsertRowid: result.last_insert_rowid,
  };
}

export default {
  execute,
};