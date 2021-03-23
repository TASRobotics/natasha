import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('message', MessageSchema);
