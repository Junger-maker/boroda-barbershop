import { query } from './turso-http';

// Экспортируем query как default для совместимости с существующим кодом
export default {
  execute: async ({ sql, args }: { sql: string; args: any[] }) => {
    const rows = await query(sql, args);
    return { rows };
  },
  executeBatch: async (statements: Array<{ sql: string; args: any[] }>) => {
    // Для batch запросов
    const results = [];
    for (const stmt of statements) {
      results.push(await query(stmt.sql, stmt.args));
    }
    return results;
  }
};