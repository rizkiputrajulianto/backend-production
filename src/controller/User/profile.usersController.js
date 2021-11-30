const { Users, socmed, Alamat, Kota, Kecamatan, Provinsi } = require('../../models');

const service = async (req, res, next) => {
	try {
		const where = {
			id: req.auth.id
		};
		const requestDB = await Users.findOne({
			where,
			attributes: { exclude: [ 'password', 'createdAt', 'updatedAt', 'deletedAt' ] },
			include: [
				{ model: socmed, as: 'sosmed', attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] } },
				{
					model: Alamat,
					as: 'alamat',
					attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] },
					include: {
						model: Kecamatan,
						as: 'Kecamatan',
						attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] },
						include: {
							model: Kota,
							as: 'kota',
							attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] },
							include: {
								model: Provinsi,
								as: 'provinsi',
								attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] }
							}
						}
					}
				}
			]
		});
		return res.json({ data: requestDB });
	} catch (error) {
		return res.status(500).json({ msg: error.toString() });
	}
};

module.exports = { service };
