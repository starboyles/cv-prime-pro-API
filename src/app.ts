import { Application } from 'express';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import cvRoutes from './routes/cv.routes';

export const setupRoutes = (app: Application) => {
  app.use('/auth', authRoutes);
  app.use('/users', userRoutes);
  app.use('/cv', cvRoutes);
};
