import express from 'express';
import RestoManagerRoutes from './routes/restoManager.routes';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use(RestoManagerRoutes);

export default app;