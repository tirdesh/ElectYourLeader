import { setResponse, setErrorResponse, setNotFoundResponse } from '../controllers/responseHandler.js';
import * as voterService from '../services/voterService.js';

export async function registerVoter(req, res) {
  const { address } = req.body;
  try {
    const voter = await voterService.createVoter(address);
    setResponse(voter, res, 201);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function getAllVoters(req, res) {
  try {
    const voters = await voterService.getVoters();
    setResponse(voters, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function getVoterByAddress(req, res) {
  const { address } = req.params;
  try {
    const voter = await voterService.getVoterByAddress(address);
    if (!voter) {
      setNotFoundResponse('Voter not found', res);
      return;
    }
    setResponse(voter, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}

export async function addVotedElection(req, res) {
  const { voterId, electionId } = req.body;
  try {
    await voterService.addVotedElection(voterId, electionId);
    setResponse({ message: 'Voted election added to voter successfully' }, res);
  } catch (error) {
    console.error(error);
    setErrorResponse(error, res);
  }
}
