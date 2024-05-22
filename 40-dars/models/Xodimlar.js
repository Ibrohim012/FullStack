import mongoose from 'mongoose';

const { Schema } = mongoose;

const XodimSchema = new Schema({
  ism: { type: String, required: true },
  familiya: { type: String, required: true },
  lavozimi: { type: String, required: true }
});

const Xodimlar = mongoose.model('Xodimlar', XodimSchema);

export default Xodimlar;
