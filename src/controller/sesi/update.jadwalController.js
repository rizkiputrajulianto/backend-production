const {Session} = require('../../models');

const service = async (req, res, next) => {
    try {
        const where = {
            kodeSesi: req.params.kode
        }
        const payload = req.body;
        const requestDB = await Session.update(payload, {where});
        if (requestDB[0]) {
            return res.json({msg: 'Success to Update data', data: payload});
        } else {
            return res.status(404).json({msg: 'Failed to Update data'});
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service};