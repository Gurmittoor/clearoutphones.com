import { createServer } from '@cloudflare/express';
import app from './app.js';
const server = createServer(app);
export default {
  fetch: server.fetch,
};
