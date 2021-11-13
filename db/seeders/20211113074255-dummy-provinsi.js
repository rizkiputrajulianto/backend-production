'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Provinsi', [{
      'id' : 1,
      'namaProvinsi' : 'Aceh'
    },{
      'id' : 2,
      'namaProvinsi' : 'Bali'
    },{
      'id' : 3,
      'namaProvinsi' : 'Bangka Belitung'
    },{
      'id' : 4,
      'namaProvinsi' : 'Banten'
    },{
      'id' : 5,
      'namaProvinsi' : 'Bengkulu'
    },{
      'id' : 6,
      'namaProvinsi' : 'Yogjakarta'
    },{
      'id' : 7,
      'namaProvinsi' : 'Jakarta'
    },{
      'id' : 8,
      'namaProvinsi' : 'Gorontalo'
    },{
      'id' : 9,
      'namaProvinsi' : 'Jawa Barat'
    },{
      'id' : 10,
      'namaProvinsi' : 'Jawa Tengah'
    },{
      'id' : 11,
      'namaProvinsi' : 'Jawa Timur'
    },{
      'id' : 12,
      'namaProvinsi' : 'Kalimantan Barat'
    },{
      'id' : 13,
      'namaProvinsi' : 'Kalimantan Selatan'
    },{
      'id' : 14,
      'namaProvinsi' : 'Kalimantan Tengah'
    },{
      'id' : 15,
      'namaProvinsi' : 'Kalimantan Timur'
    },{
      'id' : 16,
      'namaProvinsi' : 'Kalimantan Utara'
    },{
      'id' : 17,
      'namaProvinsi' : 'Kepualuan Riau'
    },{
      'id' : 18,
      'namaProvinsi' : 'Lampung'
    },{
      'id' : 19,
      'namaProvinsi' : 'Maluku'
    },{
      'id' : 20,
      'namaProvinsi' : 'Maluku Utara'
    },{
      'id' : 21,
      'namaProvinsi' : 'Nusa Tenggara Barat'
    },{
      'id' : 22,
      'namaProvinsi' : 'Nusa Tenggara Timur'
    },{
      'id' : 23,
      'namaProvinsi' : 'Papua'
    },{
      'id' : 24,
      'namaProvinsi' : 'Papua Barat'
    },{
      'id' : 25,
      'namaProvinsi' : 'Riau'
    },{
      'id' : 26,
      'namaProvinsi' : 'Sumatera Barat'
    },{
      'id' : 27,
      'namaProvinsi' : 'Sumatera Selatan'
    },{
      'id' : 28,
      'namaProvinsi' : 'Sumatera Utara'
    },{
      'id' : 29,
      'namaProvinsi' : 'Selawesi Barat'
    },{
      'id' : 30,
      'namaProvinsi' : 'Sulawesi Selatan'
    },{
      'id' : 31,
      'namaProvinsi' : 'Sulawesi Tengah'
    },{
      'id' : 32,
      'namaProvinsi' : 'Sulawesi Tenggara'
    },{
      'id' : 33,
      'namaProvinsi' : 'Sulawesi Utara'
    },{
      'id' : 34,
      'namaProvinsi' : 'Jambi'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Provinsi', null, {});
  }
};
