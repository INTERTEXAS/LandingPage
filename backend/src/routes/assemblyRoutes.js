import { Router } from 'express';
import { AssemblyController } from '../controllers/assemblyController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/:id/quorum', authenticateToken, AssemblyController.getQuorum);
router.post('/:id/checkin', authenticateToken, AssemblyController.registerAttendance);

export default router;
