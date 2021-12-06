'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('provinsi', [
			{
				id: 1,
				nama_provinsi: 'Aceh'
			},
			{
				id: 2,
				nama_provinsi: 'Bali'
			},
			{
				id: 3,
				nama_provinsi: 'Bangka Belitung'
			},
			{
				id: 4,
				nama_provinsi: 'Banten'
			},
			{
				id: 5,
				nama_provinsi: 'Bengkulu'
			},
			{
				id: 6,
				nama_provinsi: 'Yogjakarta'
			},
			{
				id: 7,
				nama_provinsi: 'Jakarta'
			},
			{
				id: 8,
				nama_provinsi: 'Gorontalo'
			},
			{
				id: 9,
				nama_provinsi: 'Jawa Barat'
			},
			{
				id: 10,
				nama_provinsi: 'Jawa Tengah'
			},
			{
				id: 11,
				nama_provinsi: 'Jawa Timur'
			},
			{
				id: 12,
				nama_provinsi: 'Kalimantan Barat'
			},
			{
				id: 13,
				nama_provinsi: 'Kalimantan Selatan'
			},
			{
				id: 14,
				nama_provinsi: 'Kalimantan Tengah'
			},
			{
				id: 15,
				nama_provinsi: 'Kalimantan Timur'
			},
			{
				id: 16,
				nama_provinsi: 'Kalimantan Utara'
			},
			{
				id: 17,
				nama_provinsi: 'Kepualuan Riau'
			},
			{
				id: 18,
				nama_provinsi: 'Lampung'
			},
			{
				id: 19,
				nama_provinsi: 'Maluku'
			},
			{
				id: 20,
				nama_provinsi: 'Maluku Utara'
			},
			{
				id: 21,
				nama_provinsi: 'Nusa Tenggara Barat'
			},
			{
				id: 22,
				nama_provinsi: 'Nusa Tenggara Timur'
			},
			{
				id: 23,
				nama_provinsi: 'Papua'
			},
			{
				id: 24,
				nama_provinsi: 'Papua Barat'
			},
			{
				id: 25,
				nama_provinsi: 'Riau'
			},
			{
				id: 26,
				nama_provinsi: 'Sumatera Barat'
			},
			{
				id: 27,
				nama_provinsi: 'Sumatera Selatan'
			},
			{
				id: 28,
				nama_provinsi: 'Sumatera Utara'
			},
			{
				id: 29,
				nama_provinsi: 'Selawesi Barat'
			},
			{
				id: 30,
				nama_provinsi: 'Sulawesi Selatan'
			},
			{
				id: 31,
				nama_provinsi: 'Sulawesi Tengah'
			},
			{
				id: 32,
				nama_provinsi: 'Sulawesi Tenggara'
			},
			{
				id: 33,
				nama_provinsi: 'Sulawesi Utara'
			},
			{
				id: 34,
				nama_provinsi: 'Jambi'
			}
		]);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('provinsi', null, {});
	}
};
