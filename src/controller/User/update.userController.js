const {Users} = require('../../models');
const {body, check} = require('express-validator');

const service = async (req, res, next) => {
    try {
        const payload = req.body;
        const where = {username: payload.username}
        const requestDB = await Users.update(payload, {where});
        console.log(requestDB)
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