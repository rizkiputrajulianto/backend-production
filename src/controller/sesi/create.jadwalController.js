const {Session} = require('../../models');

const service = async (req, res, next) => {
    try {
        const payload = req.body;
        const requestDB = await Session.create(payload);
        if (requestDB) {
            return res.json({msg: "Sukses", data: payload});
        } else {
            return res.status(404).json({msg: "Data failed to added"});
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service}