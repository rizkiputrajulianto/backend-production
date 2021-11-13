const {Materi, Session} = require('../../models');

const service = async (req, res, next) => {
    try {
        const where = {};
        if (req.params.kode) {
            where.kodeSesi = req.params.kode;
        }
        const requestDB = await Session.findAll({where,attributes: ["namaSesi", "kodeSesi"], include: [{model: Materi, as: 'Materi'}]});
        if (!req.params.kode) {
        return res.json({data: requestDB});
        } else {
            if (requestDB.length < 1) {
                return res.status(404).json({message: "Data not found"});
            } else {
                return res.json({data: requestDB[0]});
            }
        }
    } catch (error) {
        return res.status(500).json({message: error.toString()});
    }
}

module.exports = {service};