import mongoose from 'mongoose';
import dtDatabase from './data/dt.js';

mongoose.connect('mongodb+srv://officialbegzodbek:mansur890@loyiha.jwnnqpz.mongodb.net/')
  .then(() => {
    console.log('MongoDBga ulanish amalga oshirildi');
    return dtDatabase();
  })
  .then(() => {
    console.log('Ma\'lumotlar muvaffaqiyatli qo\'shildi');
    mongoose.connection.close();
  })
  .catch(err => console.error('Xatolik:', err));
