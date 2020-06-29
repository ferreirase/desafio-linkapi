import mongoose from 'mongoose';

mongoose.connect(`mongodb://localhost/linkapi`, {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

export default mongoose;
