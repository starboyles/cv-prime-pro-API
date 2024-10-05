import { Application } from 'express';
import authRoutes from './routes/auth.routes.ts';
import userRoutes from './routes/user.routes.ts';
import cvRoutes from './routes/cv.routes.ts';


export const setupRoutes = (app: Application) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/cv', cvRoutes);
};

