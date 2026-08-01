import { Router } from 'express';
import { AuthController } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/login', AuthController.login);
router.get('/me', authenticateToken, AuthController.getProfile);

export default router;
