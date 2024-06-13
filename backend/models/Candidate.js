import mongoose from 'mongoose';
const { Schema } = mongoose;

const CandidateSchema = new Schema({
  name: { type: String, required: true },
});

const Candidate = mongoose.model('Candidate', CandidateSchema);

export default Candidate;
