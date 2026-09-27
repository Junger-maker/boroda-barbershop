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
  
  // 1. Надёжное извлечение имён колонок (будь то строка или объект { name: "..." })
  const columnNames = (result.cols || []).map((col: any) => {
    if (typeof col === 'object' && col !== null && 'name' in col) {
      return String(col.name);
    }
    return String(col);
  });

  // 2. Надёжное преобразование строк в объекты с извлечением чистых значений
  const rows = (result.rows || []).map((row: any) => {
    const obj: Record<string, any> = {};
    
    if (Array.isArray(row)) {
      columnNames.forEach((colName: string, index: number) => {
        let val = row[index];
        // Если значение пришло в формате { type: "...", value: "..." }, берём только value
        if (typeof val === 'object' && val !== null && 'value' in val) {
          val = val.value;
        }
        obj[colName] = val;
      });
    } else if (typeof row === 'object' && row !== null) {
      // Fallback: если строка уже объект, но ключи сломаны, пытаемся сопоставить по индексу
      const keys = Object.keys(row);
      keys.forEach((key, index) => {
        const colName = columnNames[index] || key;
        let val = (row as any)[key];
        if (typeof val === 'object' && val !== null && 'value' in val) {
          val = val.value;
        }
        obj[colName] = val;
      });
    }
    return obj;
  });

  return {
    rows,
    columns: columnNames,
    rowsAffected: result.affected_row_count || 0,
    lastInsertRowid: result.last_insert_rowid || null,
  };
}

export default {
  execute,
};
