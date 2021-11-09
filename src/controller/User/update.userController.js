const {Users} = require('../../models');

const service = async (req, res, next) => {
    try {
        const payload = req.body;
        const where = {username: payload.username}
        const requestDB = await Users.update({where}, payload);
        if (requestDB[0]) {
        return res.json({msg:"Success", data: payload});            
        } else {
            return res.status(404).json({msg:"Data User gagal di update"})
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
};

module.exports = {service};