import { Router } from 'express';
import authRoutes from './authRoutes.js';
import assemblyRoutes from './assemblyRoutes.js';
import voteRoutes from './voteRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/assemblies', assemblyRoutes);
router.use('/votes', voteRoutes);

export default router;
