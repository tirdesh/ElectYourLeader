import { setResponse, setErrorResponse, setNotFoundResponse } from '../controllers/responseHandler.js';
import * as electionService from '../services/electionService.js';

export async function createElection(req, res) {
  const { name } = req.body;
  try {
    const election = await electionService.createElection(name);
    setResponse(election, res, 201);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function getAllElections(req, res) {
  try {
    const elections = await electionService.getElections();
    setResponse(elections, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function getActiveElections(req, res) {
  try {
    const elections = await electionService.getActiveElections();
    setResponse(elections, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function getElectionById(req, res) {
  const { id } = req.params;
  try {
    const election = await electionService.getElectionById(id);
    if (!election) {
      setNotFoundResponse('Election not found', res);
      return;
    }
    setResponse(election, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function updateElection(req, res) {
  const { id } = req.params;
  const { name, active } = req.body;
  try {
    const updatedElection = await electionService.updateElection(id, name, active);
    if (!updatedElection) {
      setNotFoundResponse('Election not found', res);
      return;
    }
    setResponse(updatedElection, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function addCandidateToElection(req, res) {
  const { electionId, candidateId } = req.body;
  try {
    await electionService.addCandidateToElection(electionId, candidateId);
    setResponse({ message: 'Candidate added to election successfully' }, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function removeCandidateFromElection(req, res) {
  const { electionId, candidateId } = req.body;
  try {
    await electionService.removeCandidateFromElection(electionId, candidateId);
    setResponse({ message: 'Candidate removed from election successfully' }, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function deleteElection(req, res) {
  const { id } = req.params;
  try {
    await electionService.deleteElection(id);
    setResponse({ message: 'Election deleted successfully' }, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}
