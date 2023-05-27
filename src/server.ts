import express from 'express';
import { routes } from './routes';

export default function initServer(): void {
  const app = express();
  const port = Number(process.env.PORT) || 3333;

  app.use(express.json());
  app.use('/', routes);

  app.listen(port);
  console.log(`Express Server started on http://localhost:${port} port.`);
}
