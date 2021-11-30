const { Users, Class, Alamat, socmed, Kecamatan, Kota } = require('../../models');

const service = async (req, res, next) => {
	try {
		const where = {};
		const page = req.query.page || 0;
		const limit = req.query.limit || 0;
		if (req.params.username) {
			where.username = req.params.username;
		}
		const requestDB = await Users.findAll({
			where,
			attributes: { exclude: [ 'password' ] },
			offset: (page - 1) * limit || null,
			limit: limit || null,
			include: [
				{ model: Class, as: 'activeClass' },
				{
					model: Alamat,
					as: 'alamat',
					attributes: [ 'namaAlamat' ],
					include: {
						model: Kecamatan,
						as: 'Kecamatan',
						attributes: [ 'namaKecamatan' ],
						include: { model: Kota, as: 'kota', attributes: [ 'namaKota' ] }
					}
				},
				{ model: socmed, as: 'sosmed' }
			]
		});
		if (!req.params.username) {
			return res.json({ data: requestDB });
		}
		else {
			if (requestDB.length < 1) {
				return res.status(404).json({ msg: 'Data Not Found' });
			}
			else {
				return res.json({ data: requestDB[0] });
			}
		}
	} catch (error) {
		return res.status(500).json({ msg: error.toString() });
	}
};

module.exports = { service };
