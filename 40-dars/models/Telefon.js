import mongoose from 'mongoose';

const { Schema } = mongoose;

const TelefonSchema = new Schema({
  model: { type: String, required: true },
  narxi: { type: Number, required: true },
  ishlab_chiqaruvchi: { type: String, required: true },
  xotira: { type: Number, required: true }
});

const Telefon = mongoose.model('Telefon', TelefonSchema);

export default Telefon;
