import Election from '../models/Election.js';

export async function createElection(name) {
  return await Election.create({ name });
}

export async function getElections() {
  return await Election.find().populate('candidates').lean();
}

export async function getActiveElections() {
  return await Election.find({ active: true }).populate('candidates').lean();
}

export async function getElectionById(id) {
  return await Election.findById(id).populate('candidates').lean();
}

export async function updateElection(id, name, active) {
  return await Election.findByIdAndUpdate(id, { name, active }, { new: true }).populate('candidates').lean();
}

export async function addCandidateToElection(electionId, candidateId) {
  await Election.findByIdAndUpdate(electionId, { $addToSet: { candidates: candidateId } });
}

export async function removeCandidateFromElection(electionId, candidateId) {
  await Election.findByIdAndUpdate(electionId, { $pull: { candidates: candidateId } });
}

export async function deleteElection(id) {
  await Election.findByIdAndDelete(id);
}
