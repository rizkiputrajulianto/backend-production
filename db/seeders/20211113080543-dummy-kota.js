'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Kota', [{
      id: 1,
      nama_kota: 'Banda Aceh',
      id_provinsi: 1
    },{
      id: 2,
      nama_kota: 'Langsa',
      id_provinsi: 1
    },{
      id: 3,
      nama_kota: 'Lhokseumawe',
      id_provinsi: 1
    },{
      id: 4,
      nama_kota: 'Sabang',
      id_provinsi: 1
    },{
      id: 5,
      nama_kota: 'Subulussalam',
      id_provinsi: 1
    },{
      id: 6,
      nama_kota: 'Denpasar',
      id_provinsi: 2
    },{
      id: 7,
      nama_kota: 'Pangkalpinang',
      id_provinsi: 3
    },{
      id: 8,
      nama_kota: 'Cilegon',
      id_provinsi: 4
    },{
      id: 9,
      nama_kota: 'Serang',
      id_provinsi: 4
    },{
      id: 10,
      nama_kota: 'Tanggerang Selatan',
      id_provinsi: 4
    },{
      id: 11,
      nama_kota: 'Tanggerang',
      id_provinsi: 4
    },{
      id: 12,
      nama_kota: 'Bengkulu',
      id_provinsi: 5
    },{
      id: 13,
      nama_kota: 'Yogyakarta',
      id_provinsi: 6
    },{
      id: 14,
      nama_kota: 'Gorontalo',
      id_provinsi: 8
    },{
      id: 15,
      nama_kota: 'Jakarta Barat',
      id_provinsi: 7
    },{
      id: 16,
      nama_kota: 'Jakarta Timur',
      id_provinsi: 7
    },{
      id: 17,
      nama_kota: 'Jakarta Selatan',
      id_provinsi: 7
    },{
      id: 18,
      nama_kota: 'Jakarta Utara',
      id_provinsi: 7
    },{
      id: 19,
      nama_kota: 'Jakarta Pusat',
      id_provinsi: 7
    },{
      id: 20,
      nama_kota: 'Sungai Penuh',
      id_provinsi: 34
    },{
      id: 21,
      nama_kota: 'Jambi',
      id_provinsi: 34
    },{
      id: 22,
      nama_kota: 'Bandung',
      id_provinsi: 9
    },{
      id: 23,
      nama_kota: 'Bekasi',
      id_provinsi: 9
    },{
      id: 24,
      nama_kota: 'Bogor',
      id_provinsi: 9
    },{
      id: 25,
      nama_kota: 'Cimahi',
      id_provinsi: 9
    },{
      id: 26,
      nama_kota: 'Cirebon',
      id_provinsi: 9
    },{
      id: 27,
      nama_kota: 'Sukabumi',
      id_provinsi: 9
    },{
      id: 28,
      nama_kota: 'Depok',
      id_provinsi: 9
    },{
      id: 29,
      nama_kota: 'Tasikmalaya',
      id_provinsi: 9
    },{
      id: 30,
      nama_kota: 'Banjar',
      id_provinsi: 9
    },{
      id: 31,
      nama_kota: 'Magelang',
      id_provinsi: 10
    },{
      id: 32,
      nama_kota: 'Pekalongan',
      id_provinsi: 10
    },{
      id: 33,
      nama_kota: 'Salatiga',
      id_provinsi: 10
    },{
      id: 34,
      nama_kota: 'Semarang',
      id_provinsi: 10
    },{
      id: 35,
      nama_kota: 'Surakarta',
      id_provinsi: 10
    },{
      id: 36,
      nama_kota: 'Tegal',
      id_provinsi: 10
    },{
      id: 37,
      nama_kota: 'Batu',
      id_provinsi: 11
    },{
      id: 38,
      nama_kota: 'Blitar',
      id_provinsi: 11
    },{
      id: 39,
      nama_kota: 'Kediri',
      id_provinsi: 11
    },{
      id: 40,
      nama_kota: 'Madiun',
      id_provinsi: 11
    },{
      id: 41,
      nama_kota: 'Malang',
      id_provinsi: 11
    },{
      id: 42,
      nama_kota: 'Mojokerto',
      id_provinsi: 11
    },{
      id: 43,
      nama_kota: 'Pasuruan',
      id_provinsi: 11
    },{
      id: 44,
      nama_kota: 'Probolinggo',
      id_provinsi: 11
    },{
      id: 45,
      nama_kota: 'Surabaya',
      id_provinsi: 11
    },{
      id: 46,
      nama_kota: 'Singkawang',
      id_provinsi: 12
    },{
      id: 47,
      nama_kota: 'Pontianak',
      id_provinsi: 12
    },{
      id: 48,
      nama_kota: 'Banjarmasin',
      id_provinsi: 13
    },{
      id: 49,
      nama_kota: 'Banjarbaru',
      id_provinsi: 13
    },{
      id: 50,
      nama_kota: 'Palangkaraya',
      id_provinsi: 14
    },{
      id: 51,
      nama_kota: 'Balikpapan',
      id_provinsi: 15
    },{
      id: 52,
      nama_kota: 'Bontang',
      id_provinsi: 15
    },{
      id: 53,
      nama_kota: 'Samarinda',
      id_provinsi: 15
    },{
      id: 54,
      nama_kota: 'Tarakan',
      id_provinsi: 16
    },{
      id: 55,
      nama_kota: 'Batam',
      id_provinsi: 17
    },{
      id: 56,
      nama_kota: 'Tanjungpinang',
      id_provinsi: 17
    },{
      id: 57,
      nama_kota: 'Bandar Lampung',
      id_provinsi: 18
    },{
      id: 58,
      nama_kota: 'Metro',
      id_provinsi: 18
    },{
      id: 59,
      nama_kota: 'Ternate',
      id_provinsi: 20
    },{
      id: 60,
      nama_kota: 'Tidore Kepulauan',
      id_provinsi: 20
    },{
      id: 62,
      nama_kota: 'Ambon',
      id_provinsi: 19
    },{
      id: 63,
      nama_kota: 'Tual',
      id_provinsi: 19
    },{
      id: 64,
      nama_kota: 'Bima',
      id_provinsi: 21
    },{
      id: 65,
      nama_kota: 'Mataram',
      id_provinsi: 21
    },{
      id: 66,
      nama_kota: 'Kupang',
      id_provinsi: 22
    },{
      id: 67,
      nama_kota: 'Sorong',
      id_provinsi: 24
    },{
      id: 68,
      nama_kota: 'Jayapura',
      id_provinsi: 23
    },{
      id: 69,
      nama_kota: 'Dumai',
      id_provinsi: 25
    },{
      id: 70,
      nama_kota: 'Pekanbaru',
      id_provinsi: 25
    },{
      id: 71,
      nama_kota: 'Makassar',
      id_provinsi: 30
    },{
      id: 72,
      nama_kota: 'Palopo',
      id_provinsi: 30
    },{
      id: 73,
      nama_kota: 'Parepare',
      id_provinsi: 30
    },{
      id: 74,
      nama_kota: 'Palu',
      id_provinsi: 31
    },{
      id: 75,
      nama_kota: 'Baubau',
      id_provinsi: 32
    },{
      id: 76,
      nama_kota: 'Kendari',
      id_provinsi: 32
    },{
      id: 77,
      nama_kota: 'Bitung',
      id_provinsi: 33
    },{
      id: 78,
      nama_kota: 'Kotamobagu',
      id_provinsi: 33
    },{
      id: 79,
      nama_kota: 'Manado',
      id_provinsi: 33
    },{
      id: 80,
      nama_kota: 'Tomohon',
      id_provinsi: 33
    },{
      id: 81,
      nama_kota: 'Padang',
      id_provinsi: 26
    },{
      id: 82,
      nama_kota: 'Padang Panjang',
      id_provinsi: 26
    },{
      id: 83,
      nama_kota: 'Pariaman',
      id_provinsi: 26
    },{
      id: 84,
      nama_kota: 'Payakumbuh',
      id_provinsi: 26
    },{
      id: 85,
      nama_kota: 'Bukittinggi',
      id_provinsi: 26
    },{
      id: 86,
      nama_kota: 'Sawahlunto',
      id_provinsi: 26
    },{
      id: 87,
      nama_kota: 'Solok',
      id_provinsi: 26
    },{
      id: 88,
      nama_kota: 'Lubuklinggau',
      id_provinsi: 27
    },{
      id: 89,
      nama_kota: 'Pagar Alam',
      id_provinsi: 27
    },{
      id: 90,
      nama_kota: 'Palembang',
      id_provinsi: 27
    },{
      id: 91,
      nama_kota: 'Prabumulih',
      id_provinsi: 27
    },{
      id: 92,
      nama_kota: 'Sekayu',
      id_provinsi: 27
    },{
      id: 93,
      nama_kota: 'Gunungsitoli',
      id_provinsi: 28
    },{
      id: 94,
      nama_kota: 'Medan',
      id_provinsi: 28
    },{
      id: 95,
      nama_kota: 'Padang Sidempuan',
      id_provinsi: 28
    },{
      id: 96,
      nama_kota: 'Pematangsiantar',
      id_provinsi: 28
    },{
      id: 97,
      nama_kota: 'Sibolga',
      id_provinsi: 28
    },{
      id: 98,
      nama_kota: 'Tanjungbalai',
      id_provinsi: 28
    },{
      id: 61,
      nama_kota: 'Tebing Tinggi',
      id_provinsi: 28
    },]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Kota', null, {});
  }
};
