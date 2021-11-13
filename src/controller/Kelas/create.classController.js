const {Class} = require('../../models');

const service = async (req, res, next) => {
    try {
        const payload = req.body;
        const requestDB = await Class.create(payload);
        if (requestDB) {
            return res.json({
            msg: "Success",
            data: payload
            });
        } else {
            return res.status(404).json({msg: "Can't add Data"});
        }
    }catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
};

module.exports = {service};