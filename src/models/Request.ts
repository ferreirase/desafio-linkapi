import mongoose from '../database';

const RequestSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  total_value: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Request = mongoose.model('Request', RequestSchema);

export default Request;
