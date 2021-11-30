const { Presensi, Session, Class, joinClass } = require('../../models');

const service = async (req, res, next) => {
	try {
		const requestSession = await Session.findOne({ where: { kodeSesi: req.body.kodeSesi } });
		if (requestSession) {
			const requestClass = await Class.findOne({ where: { kodeKelas: req.body.kodeKelas } });
			if (requestClass) {
				const requestJoinClass = await joinClass.findOne({
					where: { idUsers: req.auth.id, idClass: requestClass.id }
				});
				if (requestJoinClass) {
					const payload = {
						idSession: requestSession.id,
						idJoinClass: requestJoinClass.id
					};
					const [ requestDB, done ] = await Presensi.findOrCreate({ where: payload });
					if (done) {
						return res.json({ msg: 'Absen Berhasil', data: payload });
					}
					else if (!done) {
						return res.status(400).json({ msg: 'Sudah Melakukan Absen' });
					}
					else {
						return res.status(400).json({ msg: 'Gagal Melakukan Absen' });
					}
				}
				else {
					return res.status(400).json({ msg: 'Anda tidak terdaftar di kelas ini' });
				}
			}
			else {
				return res.status(404).json({ msg: 'Kelas tidak ditemukan' });
			}
		}
		else {
			return res.status(404).json({ msg: 'Kode Sesi Salah' });
		}
	} catch (error) {
		return res.status(500).json({ msg: error.toString() });
	}
};

module.exports = { service };
