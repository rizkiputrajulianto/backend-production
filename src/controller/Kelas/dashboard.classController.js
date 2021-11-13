const {Class} = require('../../models');

const service = async (req, res, next) => {
    try {
        const where = {};
        if (req.params.kode) {
            where.kodeKelas = req.params.kode
        }
        const requestDB = await Class.findAll() // belum bisa lanjut butuh dashboard
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}