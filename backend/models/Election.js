import mongoose from 'mongoose';

const { Schema } = mongoose;

const electionSchema = new Schema({
  name: { type: String, required: true },
  active: { type: Boolean, default: false },
  candidates: [{ type: Schema.Types.ObjectId, ref: 'Candidate' }]
});

export default mongoose.model('Election', electionSchema);
