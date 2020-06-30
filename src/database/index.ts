import mongoose from 'mongoose';

const host = process.env.MONGO_URL || 'localhost';
const connectionString = `mongodb://${host}/linkapi`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

export default mongoose;
