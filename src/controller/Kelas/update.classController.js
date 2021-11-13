const {Class} = require('../../models');

const service = async (req, res, next) => {
    try {
        const payload = req.body;
        const where = {kodeKelas : req.params.kode}
        const requestDB = await Class.update(payload, {where});
        if (requestDB[0]) {
            return res.json({msg: 'Success', data: payload});
        } else {
            return res.status(404).json({msg: 'Failed to update Data'});
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service};