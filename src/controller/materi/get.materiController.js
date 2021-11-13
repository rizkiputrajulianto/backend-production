const {Materi, Session} = require('../../models');

const service = async (req, res, next) => {
    try {
        const where = {};
        if (req.params.kode) {
            where.kodeSesi = req.params.kode;
        }
        const requestDB = await Session.findAll({where,attributes: ["namaSesi", "kodeSesi"], include: [{model: Materi, as: 'Materi'}]});
        return res.json({data: requestDB});
    } catch (error) {
        return res.status(500).json({message: error.toString()});
    }
}

module.exports = {service};