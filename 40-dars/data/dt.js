import Telefon from '../models/Telefon.js';
import Mijoz from '../models/Mijoz.js';
import Sotuv from '../models/Sotuvlar.js';
import Xodim from '../models/Xodimlar.js';

async function dtDatabase() {
  await Telefon.deleteMany({});
  await Mijoz.deleteMany({});
  await Sotuv.deleteMany({});
  await Xodim.deleteMany({});

  const telefonlar = await Telefon.insertMany([
    { model: 'iPhone 12', narxi: 990, ishlab_chiqaruvchi: 'Apple', xotira: 64 },
    { model: 'Samsung Galaxy S21', narxi: 799, ishlab_chiqaruvchi: 'Samsung', xotira: 128 },
    { model: 'Google Pixel 5', narxi: 665, ishlab_chiqaruvchi: 'Google', xotira: 128 },
    { model: 'OnePlus 9', narxi: 728, ishlab_chiqaruvchi: 'OnePlus', xotira: 256 },
    { model: 'Xiaomi Mi 11', narxi: 745, ishlab_chiqaruvchi: 'Xiaomi', xotira: 128 },
    { model: 'Huawei P40', narxi: 710, ishlab_chiqaruvchi: 'Huawei', xotira: 256 }
  ]);

  const mijozlar = await Mijoz.insertMany([
    { ism: 'Alijon', familiya: 'Valiyev', telefon: '+998901234567' },
    { ism: 'Sanjar', familiya: 'Qarshiyev', telefon: '+998909876543' },
    { ism: 'Dilnoza', familiya: 'Rasulova', telefon: '+998912345678' },
    { ism: 'Anvar', familiya: 'Bekzodov', telefon: '+998919876542' },
    { ism: 'Zarina', familiya: 'Karimova', telefon: '+998902345678' },
    { ism: 'Murod', familiya: 'Umarov', telefon: '+998908765432' }
  ]);

  const xodimlar = await Xodim.insertMany([
    { ism: 'Jasur', familiya: 'Hamroyev', lavozimi: 'Sotuvchi' },
    { ism: 'Madina', familiya: 'Qosimova', lavozimi: 'Sotuvchi' },
    { ism: 'Shokir', familiya: 'Turgunov', lavozimi: 'Menejer' },
    { ism: 'Oydin', familiya: 'Solieva', lavozimi: 'Sotuvchi' },
    { ism: 'Javlon', familiya: 'Raximov', lavozimi: 'Sotuvchi' },
    { ism: 'Feruza', familiya: 'Xolmatova', lavozimi: 'Sotuvchi' }
  ]);

  const sotuvlar = await Sotuv.insertMany([
    { telefon_id: telefonlar[0]._id, mijoz_id: mijozlar[0]._id, xodim_id: xodimlar[0]._id, sotuv_sanasi: new Date(), miqdori: 1, umumiy_narx: telefonlar[0].narxi },
    { telefon_id: telefonlar[1]._id, mijoz_id: mijozlar[1]._id, xodim_id: xodimlar[1]._id, sotuv_sanasi: new Date(), miqdori: 1, umumiy_narx: telefonlar[1].narxi },
    { telefon_id: telefonlar[2]._id, mijoz_id: mijozlar[2]._id, xodim_id: xodimlar[2]._id, sotuv_sanasi: new Date(), miqdori: 1, umumiy_narx: telefonlar[2].narxi },
    { telefon_id: telefonlar[3]._id, mijoz_id: mijozlar[3]._id, xodim_id: xodimlar[3]._id, sotuv_sanasi: new Date(), miqdori: 1, umumiy_narx: telefonlar[3].narxi },
    { telefon_id: telefonlar[4]._id, mijoz_id: mijozlar[4]._id, xodim_id: xodimlar[4]._id, sotuv_sanasi: new Date(), miqdori: 1, umumiy_narx: telefonlar[4].narxi },
    { telefon_id: telefonlar[5]._id, mijoz_id: mijozlar[5]._id, xodim_id: xodimlar[5]._id, sotuv_sanasi: new Date(), miqdori: 1, umumiy_narx: telefonlar[5].narxi }
  ]);

  console.log('Ma\'lumotlar muvaffaqiyatli qo\'shildi');
}

export default dtDatabase;
