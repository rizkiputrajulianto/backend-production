const {Materi, Session} = require('../../models');

const service = async (req, res, next) => {
    try {
        const payload = req.body;
        const sesiDB = await Session.findOne({where: {kodeSesi: payload.idSesi}});
        if (sesiDB) {
            payload.idSesi = sesiDB.id;
            const requestDB = await Materi.create(payload);
        if (requestDB) {
            return res.json({msg: 'success', data: requestDB});
        } else {
            return res.status(404).json({msg: 'failed to create data'});
        }
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service};