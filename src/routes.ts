import { Router } from 'express';
import dockingWebhookController from './controllers/dockingWebhook.controller';
import getLatestWebhookRequestController from "./controllers/getLatestWebhookRequest.controller";

export const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    name: 'The Snorlax Application',
  });
});

routes.get('/get-latest-webhook-request',  async (req, res) => {
  const result = await getLatestWebhookRequestController();

  res.status(200).json({
    ...result,
  });
});

routes.post('/docking-webhook', async (req, res) => {
  console.log(req.body)
  const { file } = req.body;
  const fileUrl = String(file.url || '');

  if (!fileUrl) {
    res.status(422).json({
      outcome: 'MISSING_FILE_URL',
    });
    return;
  }

  await dockingWebhookController({
    fileUrl,
  });

  res.status(200).json({
    outcome: 'SUCCESS',
  });
});
