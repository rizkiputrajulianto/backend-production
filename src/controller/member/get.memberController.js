const { Session, Materi, socmed, Alamat, Class, Users } = require('../../models');

const service = async (req, res, next) => {
	try {
		const where = {};
		if (req.params.kode) {
			where.kodeKelas = req.params.kode;
			const requestDB = await Class.findOne({
				where,
				attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] },
				include: [
					{
						model: Session,
						as: 'Sessions',
						attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] },
						include: [
							{
								model: Materi,
								as: 'Materi',
								attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] }
							}
						]
					},
					{
						model: Users,
						as: 'Users',
						attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt', 'password' ] },
						include: [
							{
								model: socmed,
								as: 'sosmed',
								attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] }
							},
							{
								model: Alamat,
								as: 'alamat',
								attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] }
							}
						]
					}
				]
			});
			if (requestDB) {
				return res.json({ data: requestDB });
			}
			else {
				return res.status(404).json({ msg: 'Data not Found' });
			}
		}
		else if (req.query.username) {
			where.username = req.query.username;
			const requestDB = await Users.findOne({
				where,
				attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] },
				include: [
					{
						model: Class,
						as: 'activeClass',
						attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt', 'password' ] },
						include: [
							{
								model: Session,
								as: 'Sessions',
								attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] },
								include: [
									{
										model: Materi,
										as: 'Materi',
										attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] }
									}
								]
							}
						]
					}
				]
			});
			if (requestDB) {
				return res.json({ data: requestDB });
			}
			else {
				return res.status(404).json({ msg: 'Data not Found' });
			}
		}
		else {
			const requestDB = await Class.findAll({
				where,
				attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] },
				include: [
					{
						model: Session,
						as: 'Sessions',
						attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] },
						include: [
							{
								model: Materi,
								as: 'Materi',
								attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] }
							}
						]
					},
					{
						model: Users,
						as: 'Users',
						attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt', 'password' ] },
						include: [
							{
								model: socmed,
								as: 'sosmed',
								attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] }
							},
							{
								model: Alamat,
								as: 'alamat',
								attributes: { exclude: [ 'createdAt', 'updatedAt', 'deletedAt' ] }
							}
						]
					}
				]
			});
			if (requestDB) {
				return res.json({ data: requestDB });
			}
			else {
				return res.status(404).json({ msg: 'Data not Found' });
			}
		}
	} catch (error) {
		return res.status(500).json({ msg: error.toString() });
	}
};

module.exports = { service };
