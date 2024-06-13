import Candidate from '../models/Candidate.js';

export async function createCandidate(name) {
  return await Candidate.create({ name });
}

export async function getCandidates() {
  return await Candidate.find().lean();
}

export async function getCandidateById(id) {
  return await Candidate.findById(id).lean();
}

export async function updateCandidate(id, name) {
  return await Candidate.findByIdAndUpdate(id, { name }, { new: true }).lean();
}

export async function deleteCandidate(id) {
  await Candidate.findByIdAndDelete(id);
}
