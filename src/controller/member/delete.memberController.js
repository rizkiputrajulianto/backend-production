const { joinClass } = require('../../models');

const service = async (req, res, next) => {
	try {
		const where = {
			idUsers: req.params.user,
			idClass: req.params.kelas
		};
		const requestDB = await joinClass.destroy({ where });
		if (requestDB) {
			return res.json({ msg: 'Data berhasil dihapus' });
		}
		else {
			return res.status(404).json({ msg: 'Data not Found' });
		}
	} catch (error) {
		return res.status(500).json({ msg: error.toString() });
	}
};

module.exports = { service };
