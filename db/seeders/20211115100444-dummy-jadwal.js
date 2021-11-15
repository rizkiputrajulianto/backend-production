'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Session', [{
      id: 1,
      nama_sesi: 'Perkenalan HTML CSS',
      kode_sesi: '000001',
      waktu_mulai: '2021-11-09T07:00:00.000Z',
      waktu_selesai: '2021-11-09T09:00:00.000Z',
      urutan_sesi: 1,
    },{
      id: 2,
      nama_sesi: 'Perkenalan Javascript',
      kode_sesi: '000002',
      waktu_mulai: '2021-11-10T07:00:00.000Z',
      waktu_selesai: '2021-11-10T09:00:00.000Z',
      urutan_sesi: 2,
    },{
      id: 3,
      nama_sesi: 'Perkenalan Vue.js',
      kode_sesi: '000003',
      waktu_mulai: '2021-11-11T07:00:00.000Z',
      waktu_selesai: '2021-11-11T09:00:00.000Z',
      urutan_sesi: 3,
    },]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Session', null, {});
  }
};
