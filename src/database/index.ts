import mongoose from 'mongoose';

mongoose.connect(`mongodb://localhost/linkapi`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

export default mongoose;
