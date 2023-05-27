import sqlite3 from 'sqlite3';
import { env } from './env';

let db: sqlite3.Database | null = null;

export function getDbClient(): sqlite3.Database {
  if (!db) {
    db = new sqlite3.Database(env.dbFile);
  }

  return db;
}

export function runDbQuery(
  query: string,
  ...params: unknown[]
): Promise<{ [key: string]: unknown }[]> {
  return new Promise((resolve, reject) => {
    getDbClient().all(
      query,
      params,
      function (err, rows: { [key: string]: unknown }[]) {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}
