import 'dotenv/config';
import initServer from './server';
import { getDbClient } from './db';
import {runMigrations} from "./migrations";

async function startup() {
  getDbClient();
  await runMigrations();
  initServer();
}

startup();
