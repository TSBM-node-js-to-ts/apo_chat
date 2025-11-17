import express from 'express';
import healthRouter from './routes/health.route.js';
import { sequelize } from "./db/sequelize.js";

const app = express();
app.use(express.json());

await sequelize.sync({ alter: true });

app.use('/health', healthRouter);

export default app;