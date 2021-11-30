const { Class, Users, Sequelize } = require('../../models');

const service = async (req, res, next) => {
	try {
		const requestDB = await Class.findAll({
			include: [
				{
					model: Users,
					as: 'Users',
					attributes: [ 'id' ],
					through: { attributes: [] },
					where: { id: req.auth.id },
					required: false
				}
			]
		});
		requestDB.map((item) => {
			item.dataValues.isRegistered = item.Users.length > 0;
			delete item.dataValues.Users;
		});
		return res.status(200).json({ msg: 'success', data: requestDB });
	} catch (error) {
		return res.status(500).json({ msg: error.toString() });
	}
};

module.exports = { service };
