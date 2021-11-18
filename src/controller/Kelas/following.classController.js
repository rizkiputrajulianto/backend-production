const {Class, Session} = require('../../models');

const service = async (req, res, next) => {
    try {
        const where = {};
        if (req.params.kode) {
            where.kodeKelas = req.params.kode;
        }
        const requestDB = await Class.findAll({where,include:[{model:Session, as:'Sessions'}]}) // belum bisa lanjut butuh dashboard
        if (requestDB) {
            return res.json({data: requestDB});
        }else{
            return res.status(404).json({msg:'Data Not Found'});
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service};