import { runDbQuery } from './db';

/**
 * Only need simple migration, no fancy stuff
 */
export const runMigrations = async () => {
  await runDbQuery(`
    CREATE TABLE IF NOT EXISTS webhook_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      file_url TEXT
    )
  `);
};
