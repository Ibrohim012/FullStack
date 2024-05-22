import mongoose from 'mongoose';

const { Schema } = mongoose;

const SotuvSchema = new Schema({
  telefon_id: { type: Schema.Types.ObjectId, ref: 'Telefon', required: true },
  xodim_id: { type: Schema.Types.ObjectId, ref: 'Xodim', required: true },
  mijoz_id: { type: Schema.Types.ObjectId, ref: 'Mijoz', required: true },
  sotuv_sanasi: { type: Date, required: true },
  umumiy_narx: { type: Number, required: true },
  miqdori: { type: Number, required: true }
});

const Sotuvlar = mongoose.model('Sotuvlar', SotuvSchema);

export default Sotuvlar;
