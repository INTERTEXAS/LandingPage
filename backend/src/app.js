import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import { config } from './config/env.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    service: 'Plenaria Backend Core API',
    timestamp: new Date().toISOString()
  });
});

// Rutas de la API v1
app.use('/api/v1', routes);

// Middleware de Manejo de Errores
app.use(errorHandler);

export default app;
