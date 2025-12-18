import mongoose from 'mongoose';

const connect = async () => {
  // if (mongoose.connection.readyState === 1) {
  //   console.log('MongoDB already connected');
  //   return;
  // }

  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log('database connected successfully');
  } catch (error) {
    console.log('Connection failed');
    throw new Error('Connectino failed!');
  }
};

export default connect;
