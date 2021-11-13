'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Kota', [{
      id: 1,
      namaKota: 'Banda Aceh',
      idProvinsi: 1
    },{
      id: 2,
      namaKota: 'Langsa',
      idProvinsi: 1
    },{
      id: 3,
      namaKota: 'Lhokseumawe',
      idProvinsi: 1
    },{
      id: 4,
      namaKota: 'Sabang',
      idProvinsi: 1
    },{
      id: 5,
      namaKota: 'Subulussalam',
      idProvinsi: 1
    },{
      id: 6,
      namaKota: 'Denpasar',
      idProvinsi: 2
    },{
      id: 7,
      namaKota: 'Pangkalpinang',
      idProvinsi: 3
    },{
      id: 8,
      namaKota: 'Cilegon',
      idProvinsi: 4
    },{
      id: 9,
      namaKota: 'Serang',
      idProvinsi: 4
    },{
      id: 10,
      namaKota: 'Tanggerang Selatan',
      idProvinsi: 4
    },{
      id: 11,
      namaKota: 'Tanggerang',
      idProvinsi: 4
    },{
      id: 12,
      namaKota: 'Bengkulu',
      idProvinsi: 5
    },{
      id: 13,
      namaKota: 'Yogyakarta',
      idProvinsi: 6
    },{
      id: 14,
      namaKota: 'Gorontalo',
      idProvinsi: 8
    },{
      id: 15,
      namaKota: 'Jakarta Barat',
      idProvinsi: 7
    },{
      id: 16,
      namaKota: 'Jakarta Timur',
      idProvinsi: 7
    },{
      id: 17,
      namaKota: 'Jakarta Selatan',
      idProvinsi: 7
    },{
      id: 18,
      namaKota: 'Jakarta Utara',
      idProvinsi: 7
    },{
      id: 19,
      namaKota: 'Jakarta Pusat',
      idProvinsi: 7
    },{
      id: 20,
      namaKota: 'Sungai Penuh',
      idProvinsi: 34
    },{
      id: 21,
      namaKota: 'Jambi',
      idProvinsi: 34
    },{
      id: 22,
      namaKota: 'Bandung',
      idProvinsi: 9
    },{
      id: 23,
      namaKota: 'Bekasi',
      idProvinsi: 9
    },{
      id: 24,
      namaKota: 'Bogor',
      idProvinsi: 9
    },{
      id: 25,
      namaKota: 'Cimahi',
      idProvinsi: 9
    },{
      id: 26,
      namaKota: 'Cirebon',
      idProvinsi: 9
    },{
      id: 27,
      namaKota: 'Sukabumi',
      idProvinsi: 9
    },{
      id: 28,
      namaKota: 'Depok',
      idProvinsi: 9
    },{
      id: 29,
      namaKota: 'Tasikmalaya',
      idProvinsi: 9
    },{
      id: 30,
      namaKota: 'Banjar',
      idProvinsi: 9
    },{
      id: 31,
      namaKota: 'Magelang',
      idProvinsi: 10
    },{
      id: 32,
      namaKota: 'Pekalongan',
      idProvinsi: 10
    },{
      id: 33,
      namaKota: 'Salatiga',
      idProvinsi: 10
    },{
      id: 34,
      namaKota: 'Semarang',
      idProvinsi: 10
    },{
      id: 35,
      namaKota: 'Surakarta',
      idProvinsi: 10
    },{
      id: 36,
      namaKota: 'Tegal',
      idProvinsi: 10
    },{
      id: 37,
      namaKota: 'Batu',
      idProvinsi: 11
    },{
      id: 38,
      namaKota: 'Blitar',
      idProvinsi: 11
    },{
      id: 39,
      namaKota: 'Kediri',
      idProvinsi: 11
    },{
      id: 40,
      namaKota: 'Madiun',
      idProvinsi: 11
    },{
      id: 41,
      namaKota: 'Malang',
      idProvinsi: 11
    },{
      id: 42,
      namaKota: 'Mojokerto',
      idProvinsi: 11
    },{
      id: 43,
      namaKota: 'Pasuruan',
      idProvinsi: 11
    },{
      id: 44,
      namaKota: 'Probolinggo',
      idProvinsi: 11
    },{
      id: 45,
      namaKota: 'Surabaya',
      idProvinsi: 11
    },{
      id: 46,
      namaKota: 'Singkawang',
      idProvinsi: 12
    },{
      id: 47,
      namaKota: 'Pontianak',
      idProvinsi: 12
    },{
      id: 48,
      namaKota: 'Banjarmasin',
      idProvinsi: 13
    },{
      id: 49,
      namaKota: 'Banjarbaru',
      idProvinsi: 13
    },{
      id: 50,
      namaKota: 'Palangkaraya',
      idProvinsi: 14
    },{
      id: 51,
      namaKota: 'Balikpapan',
      idProvinsi: 15
    },{
      id: 52,
      namaKota: 'Bontang',
      idProvinsi: 15
    },{
      id: 53,
      namaKota: 'Samarinda',
      idProvinsi: 15
    },{
      id: 54,
      namaKota: 'Tarakan',
      idProvinsi: 16
    },{
      id: 55,
      namaKota: 'Batam',
      idProvinsi: 17
    },{
      id: 56,
      namaKota: 'Tanjungpinang',
      idProvinsi: 17
    },{
      id: 57,
      namaKota: 'Bandar Lampung',
      idProvinsi: 18
    },{
      id: 58,
      namaKota: 'Metro',
      idProvinsi: 18
    },{
      id: 59,
      namaKota: 'Ternate',
      idProvinsi: 20
    },{
      id: 60,
      namaKota: 'Tidore Kepulauan',
      idProvinsi: 20
    },{
      id: 62,
      namaKota: 'Ambon',
      idProvinsi: 19
    },{
      id: 63,
      namaKota: 'Tual',
      idProvinsi: 19
    },{
      id: 64,
      namaKota: 'Bima',
      idProvinsi: 21
    },{
      id: 65,
      namaKota: 'Mataram',
      idProvinsi: 21
    },{
      id: 66,
      namaKota: 'Kupang',
      idProvinsi: 22
    },{
      id: 67,
      namaKota: 'Sorong',
      idProvinsi: 24
    },{
      id: 68,
      namaKota: 'Jayapura',
      idProvinsi: 23
    },{
      id: 69,
      namaKota: 'Dumai',
      idProvinsi: 25
    },{
      id: 70,
      namaKota: 'Pekanbaru',
      idProvinsi: 25
    },{
      id: 71,
      namaKota: 'Makassar',
      idProvinsi: 30
    },{
      id: 72,
      namaKota: 'Palopo',
      idProvinsi: 30
    },{
      id: 73,
      namaKota: 'Parepare',
      idProvinsi: 30
    },{
      id: 74,
      namaKota: 'Palu',
      idProvinsi: 31
    },{
      id: 75,
      namaKota: 'Baubau',
      idProvinsi: 32
    },{
      id: 76,
      namaKota: 'Kendari',
      idProvinsi: 32
    },{
      id: 77,
      namaKota: 'Bitung',
      idProvinsi: 33
    },{
      id: 78,
      namaKota: 'Kotamobagu',
      idProvinsi: 33
    },{
      id: 79,
      namaKota: 'Manado',
      idProvinsi: 33
    },{
      id: 80,
      namaKota: 'Tomohon',
      idProvinsi: 33
    },{
      id: 81,
      namaKota: 'Padang',
      idProvinsi: 26
    },{
      id: 82,
      namaKota: 'Padang Panjang',
      idProvinsi: 26
    },{
      id: 83,
      namaKota: 'Pariaman',
      idProvinsi: 26
    },{
      id: 84,
      namaKota: 'Payakumbuh',
      idProvinsi: 26
    },{
      id: 85,
      namaKota: 'Bukittinggi',
      idProvinsi: 26
    },{
      id: 86,
      namaKota: 'Sawahlunto',
      idProvinsi: 26
    },{
      id: 87,
      namaKota: 'Solok',
      idProvinsi: 26
    },{
      id: 88,
      namaKota: 'Lubuklinggau',
      idProvinsi: 27
    },{
      id: 89,
      namaKota: 'Pagar Alam',
      idProvinsi: 27
    },{
      id: 90,
      namaKota: 'Palembang',
      idProvinsi: 27
    },{
      id: 91,
      namaKota: 'Prabumulih',
      idProvinsi: 27
    },{
      id: 92,
      namaKota: 'Sekayu',
      idProvinsi: 27
    },{
      id: 93,
      namaKota: 'Gunungsitoli',
      idProvinsi: 28
    },{
      id: 94,
      namaKota: 'Medan',
      idProvinsi: 28
    },{
      id: 95,
      namaKota: 'Padang Sidempuan',
      idProvinsi: 28
    },{
      id: 96,
      namaKota: 'Pematangsiantar',
      idProvinsi: 28
    },{
      id: 97,
      namaKota: 'Sibolga',
      idProvinsi: 28
    },{
      id: 98,
      namaKota: 'Tanjungbalai',
      idProvinsi: 28
    },{
      id: 61,
      namaKota: 'Tebing Tinggi',
      idProvinsi: 28
    },]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Kota', null, {});
  }
};
