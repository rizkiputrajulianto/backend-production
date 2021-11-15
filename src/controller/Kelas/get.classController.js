const {Class} = require('../../models');

const service = async (req, res, next) => {
    try {
        const where = {};
        if (req.params.kode) {
            where.kodeKelas = req.params.kode
        }
        const page = req.query.page || 0;
        const limit = req.query.limit || 0;
        const requestDB = await Class.findAll({where,include: [{model:Session, as: 'Sessions', include: [{model: Materi, as: "Materi"}]}] ,offset: (page -1)* limit || null, limit: limit || null})
        if (!req.params.kode) {
            return res.json({data: requestDB})
        } else{
            if (requestDB.length < 1) {
                return res.status(404).json({msg: "Data not Found"})
            } else {
                return res.json({data: requestDB[0]})
            }
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()})
    }
}

module.exports = {service}