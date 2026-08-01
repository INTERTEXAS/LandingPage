import { Router } from 'express';
import { VoteController } from '../controllers/voteController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/cast', authenticateToken, VoteController.castVote);
router.get('/tally/:agendaItemId', authenticateToken, VoteController.getTally);

export default router;
