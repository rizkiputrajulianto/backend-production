const {Users} = require('../../models');

const service = async (req, res, next) => {
    try {
        const payload = req.body;
        const requestDB = await Users.create(payload);
        return res.json({msg:'Register Success', data:requestDB});
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service};