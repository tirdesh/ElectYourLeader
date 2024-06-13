// backend/routes/candidateRoutes.ts
import express from 'express';
import * as candidateController from '../controllers/candidateController.js';

const router = express.Router();

// Routes for candidates
router.post('/', candidateController.registerCandidate);
router.get('/', candidateController.getAllCandidates);
router.get('/:id', candidateController.getCandidateById);
router.put('/:id', candidateController.updateCandidate);
router.delete('/:id', candidateController.deleteCandidate);

export default router;
