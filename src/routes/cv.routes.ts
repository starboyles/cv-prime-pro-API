import { Router } from 'express';
import { createCV } from '../controllers/cv.controller.ts';

const router = Router();

router.post('/create', createCV);

export default router;
