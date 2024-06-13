import Voter from '../models/Voter.js';

export async function createVoter(address) {
  return await Voter.create({ address });
}

export async function getVoters() {
  return await Voter.find().lean();
}

export async function getVoterByAddress(address) {
  return await Voter.findOne({ address }).lean();
}

export async function addVotedElection(voterId, electionId) {
  await Voter.findByIdAndUpdate(voterId, { $addToSet: { votedElections: electionId } });
}
