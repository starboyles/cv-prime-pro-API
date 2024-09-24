import { Application } from 'express';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import cvRoutes from './routes/cv.routes';

export const setupRoutes = (app: Application) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/cv', cvRoutes);
};

module.exports = { setupRoutes };
