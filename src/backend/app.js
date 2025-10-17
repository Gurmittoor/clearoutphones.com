import express from 'express';
import health from './routes/health.js';
const app = express();
app.use(express.json());
app.use('/health', health);
export default app;
