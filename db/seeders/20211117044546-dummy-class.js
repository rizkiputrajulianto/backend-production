'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Class', [{
      id: 1,
      nama_kelas: 'Fullstack Batch 5',
      kode_kelas: '010101',
      tanggal_mulai: '2021-07-05',
      tanggal_selesai: '2021-12-10',
      deskripsi: 'Fullstack Batch 5 adalah Pelatihan untuk Seseorang yang akan menjadi Seorang Fullstack Developer',
    },{
      id: 2,
      nama_kelas: 'Fullstack Batch 6',
      kode_kelas: '010102',
      tanggal_mulai: '2021-11-11',
      tanggal_selesai: '2022-02-02',
      deskripsi: 'Fullstack Batch 6 adalah Pelatihan untuk Seseorang yang akan menjadi Seorang Fullstack Developer',
    },{
      id: 3,
      nama_kelas: 'Data Sience',
      kode_kelas: '010201',
      tanggal_mulai: '2021-07-05',
      tanggal_selesai: '2021-12-10',
      deskripsi: 'Data Sience adalah Pelatihan untuk Seseorang yang akan menjadi Seorang Data Sience',
    },]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Class', null, {});
  }
};
