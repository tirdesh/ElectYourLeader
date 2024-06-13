import { setResponse, setErrorResponse, setNotFoundResponse } from '../controllers/responseHandler.js';
import * as candidateService from '../services/candidateService.js';

export async function registerCandidate(req, res) {
  const { name } = req.body;
  try {
    const candidate = await candidateService.createCandidate(name);
    setResponse(candidate, res, 201);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function getAllCandidates(req, res) {
  try {
    const candidates = await candidateService.getCandidates();
    setResponse(candidates, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function getCandidateById(req, res) {
  const { id } = req.params;
  try {
    const candidate = await candidateService.getCandidateById(id);
    if (!candidate) {
      setNotFoundResponse('Candidate not found', res);
      return;
    }
    setResponse(candidate, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function updateCandidate(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedCandidate = await candidateService.updateCandidate(id, name);
    if (!updatedCandidate) {
      setNotFoundResponse('Candidate not found', res);
      return;
    }
    setResponse(updatedCandidate, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function deleteCandidate(req, res) {
  const { id } = req.params;
  try {
    await candidateService.deleteCandidate(id);
    setResponse({ message: 'Candidate deleted successfully' }, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}
