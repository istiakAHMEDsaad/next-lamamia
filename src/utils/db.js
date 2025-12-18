import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
  } catch (error) {
    throw new Error('Connectino failed!');
  }
};

export default connect;
