// lib/turso-http.ts

export type TursoArg = {
  type: 'null' | 'integer' | 'float' | 'text' | 'blob';
  value: string | number | null;
};

export type TursoQueryResult = {
  cols: string[];
  rows: any[][];
  affected_row_count: number;
  last_insert_rowid: number | null;
};

export async function tursoExecute(
  sql: string,
  args: TursoArg[] = []
): Promise<TursoQueryResult> {
  const dbUrl = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!dbUrl || !authToken) {
    throw new Error('Отсутствуют переменные окружения TURSO_DATABASE_URL или TURSO_AUTH_TOKEN');
  }

  // Преобразуем libsql:// в https:// для HTTP API
  const httpUrl = dbUrl.replace('libsql://', 'https://') + '/v2/pipeline';

  const payload = {
    requests: [
      {
        type: 'execute',
        stmt: {
          sql,
          ...(args.length > 0 ? { args } : {}),
        },
      },
      { type: 'close' }, // Явно закрываем соединение для экономии ресурсов сервера
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

  return executeResult.response.result;
}

// Вспомогательная функция для преобразования массива строк БД в массив типизированных объектов
export function mapRows<T>(result: TursoQueryResult): T[] {
  return result.rows.map((row) => {
    const obj: Record<string, any> = {};
    result.cols.forEach((col, index) => {
      obj[col] = row[index];
    });
    return obj as T;
  });
}