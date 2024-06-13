import mongoose from 'mongoose';

const { Schema } = mongoose;

const voterSchema = new Schema({
  address: { type: String, required: true, unique: true },
  votedElections: [{ type: Schema.Types.ObjectId, ref: 'Election' }]
});

export default mongoose.model('Voter', voterSchema);
