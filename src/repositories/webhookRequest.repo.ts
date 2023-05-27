import { runDbQuery } from '../db';

export type WebhookRequestTable = {
  file_url: string;
};

export const webhookRequestRepo = {
  async insert(insertData: WebhookRequestTable): Promise<boolean> {
    await runDbQuery(
      `
      INSERT INTO webhook_requests (file_url)
      VALUES (?)
    `,
      insertData.file_url
    );

    return true;
  },

  async getLatest(): Promise<WebhookRequestTable | undefined> {
    const rows = await runDbQuery(
      'SELECT * FROM webhook_requests ORDER BY id DESC LIMIT 1'
    );

    return rows
      .map((row) => ({
        file_url: String(row.file_url),
      }))
      .shift();
  },
};
