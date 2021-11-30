const { Users, joinClass, Session, Class } = require('../../models');

/*
data output yang dipengen
data:{
	datakelas,
	Sessions:{
		datasesi,
		Absensi: "angka buat persentase absensi dari 48 sesi"
	}

}
*/

const service = async (req, res, next) => {
	try {
		const userReq = await Users.findOne({
			where: { id: req.auth.id },
			attributes: [],
			include: {
				model: Class,
				as: 'activeClass',
				attributes: [ 'id', 'namaKelas', 'kodeKelas' ],
				through: { attributes: [] },
				include: {
					model: Session,
					as: 'Sessions',
					include: { model: joinClass, as: 'Absensi', where: { idUsers: req.auth.id }, required: false },
					attributes: [ 'id', 'namaSesi', 'kodeSesi', 'urutanSesi', 'waktuMulai' ]
				}
			}
		});
		if (userReq) {
			userReq.activeClass.map((kelas) => {
				kelas.Sessions.map((sesi) => {
					sesi.dataValues.Absen =

							sesi.Absensi.length > 0 ? 'Done' :
							'Not Yet';
					delete sesi.dataValues.Absensi;
				});
			});
			return res.json({ data: userReq.activeClass });
		}
		else {
			return res.status(404).json({ msg: 'user not found' });
		}
	} catch (error) {
		return res.status(500).json({ msg: error.toString() });
	}
};

module.exports = { service };
