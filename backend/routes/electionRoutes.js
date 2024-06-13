// backend/routes/electionRoutes.ts
import express from 'express';
import * as electionController from '../controllers/electionController.js';

const router = express.Router();

// Routes for elections
router.post('/', electionController.createElection);
router.get('/', electionController.getAllElections);
router.get('/:id', electionController.getElectionById);
router.put('/:id', electionController.updateElection);
router.delete('/:id', electionController.deleteElection);

// Additional routes specific to elections
router.post('/:electionId/add-candidate', electionController.addCandidateToElection);
router.post('/:electionId/remove-candidate', electionController.removeCandidateFromElection);

export default router;
