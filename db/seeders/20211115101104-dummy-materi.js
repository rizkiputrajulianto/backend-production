'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('materi', [
			{
				nama_materi: 'Introduction to HTML',
				jenis_materi: 'Materi',
				id_sesi: 1
			},
			{
				nama_materi: 'Recording HTML',
				jenis_materi: 'Recording',
				id_sesi: 1
			},
			{
				nama_materi: 'Introduction to CSS',
				jenis_materi: 'Materi',
				id_sesi: 1
			},
			{
				nama_materi: 'Recording CSS',
				jenis_materi: 'Recording',
				id_sesi: 1
			},
			{
				nama_materi: 'Introduction to Javascript',
				jenis_materi: 'Materi',
				id_sesi: 2
			},
			{
				nama_materi: 'Recording Javascript',
				jenis_materi: 'Recording',
				id_sesi: 2
			},
			{
				nama_materi: 'Introduction to Vue.js',
				jenis_materi: 'Materi',
				id_sesi: 3
			},
			{
				nama_materi: 'Recording Vue.js',
				jenis_materi: 'Recording',
				id_sesi: 3
			}
		]);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('materi', null, {});
	}
};
