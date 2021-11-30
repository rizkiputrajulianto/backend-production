const { Kota } = require('../../models');

const service = async (req, res, next) => {
	try {
		const requestDB = await Kota.findAll({ attributes: [ 'id', 'namaKota' ] });
		return res.json({ data: requestDB });
	} catch (error) {
		return res.status(500).json({ msg: error.toString() });
	}
};

module.exports = { service };
