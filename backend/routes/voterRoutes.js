// backend/routes/voterRoutes.ts
import express from 'express';
import * as voterController from '../controllers/voterController.js';

const router = express.Router();

// Routes for voters
router.post('/', voterController.registerVoter);
router.get('/', voterController.getAllVoters);
router.get('/:address', voterController.getVoterByAddress);

// Additional routes specific to voters
router.post('/:voterId/vote', voterController.addVotedElection);

export default router;
