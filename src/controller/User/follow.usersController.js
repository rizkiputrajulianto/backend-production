const { Users, Class, Session } = require('../../models');

const service = async (req, res, next) => {
	try {
		const detail = await Users.findOne({
			where: {
				id: req.auth.id
			},
			attributes: [],
			include: {
				model: Class,
				as: 'activeClass',
				attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] },
				through: { attributes: [] },
				include: {
					model: Session,
					as: 'Sessions',
					attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] }
				}
			}
		});
		if (detail) {
			return res.json({ data: detail.activeClass });
		}
		else {
			return res.status(404).json({ msg: 'Data tidak ditemukan' });
		}
	} catch (error) {
		return res.status(500).json({ msg: error.toString() });
	}
};

module.exports = { service };
