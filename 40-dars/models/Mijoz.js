import mongoose from 'mongoose';

const { Schema } = mongoose;

const MijozSchema = new Schema({
  ism: { type: String, required: true },
  familiya: { type: String, required: true },
  telefon: { type: String, required: true, unique: true }
});

const Mijoz = mongoose.model('Mijoz', MijozSchema);

export default Mijoz;
