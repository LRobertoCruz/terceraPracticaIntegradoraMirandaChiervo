import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

import authRoutes from './routes/auth.routes.js';
import mockRoutes from './routes/mock.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRoutes);
app.use('/api', mockRoutes);

app.use(errorHandler);

export default app;