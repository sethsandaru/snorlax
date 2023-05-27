import { Router } from 'express';
import dockingWebhookController from './controllers/dockingWebhook.controller';

export const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    name: 'The Snorlax Application',
  });
});

routes.post('docking-webhook', async (req, res) => {
  const { file } = req.body;

  await dockingWebhookController();

  res.status(200).json({
    outcome: 'SUCCESS',
  });
});
