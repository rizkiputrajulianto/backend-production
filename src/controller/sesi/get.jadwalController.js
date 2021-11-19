const {Session, joinClass} = require('../../models');

const service = async (req, res, next) => {
    try {
        const where = {}
        if (req.params.kode) {
            where.kodeSesi = req.params.kode
        }
        const requestDB = await Session.findAll({where,attributes: {exclude: ["createdAt","updatedAt","deletedAt"]}, include: [{model: joinClass, as: 'Absensi', attributes: {exclude:["createdAt","updatedAt","deletedAt"]}}]});
        if (!req.params.kode) {
            return res.json({data: requestDB});
        } else{
            if (requestDB.length<1) {
                return res.status(404).json({msg: "Data not Found"})
            } else {
                return res.json({data: requestDB[0]});
            }
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()})
    }
}

module.exports = {service}