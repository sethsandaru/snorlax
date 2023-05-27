import 'dotenv/config';
import initServer from './server';
import { getDbClient } from './db';
import {runMigrations} from "./migrations";

async function startup() {
  console.log('Booting up DB Client...');
  getDbClient();
  console.log('Booted DB Client');

  console.log('Running migration...');
  await runMigrations();
  console.log('Migration successfully ran');

  console.log('Starting Express server...');
  initServer();
}

startup();
