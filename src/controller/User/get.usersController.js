const {Users, Class} = require("../../models");

const service = async (req, res, next) => {
    try{
        const where = {};
        const page = req.query.page || 0;
        const limit = req.query.limit || 0;
        if (req.params.username) {
            where.username = req.params.username;
        };
        const requestDB = await Users.findAll({where, attributes : {exclude: ["password"]}, offset: (page-1)*limit || null, limit: limit || null, include: {model: Class, as: 'Class'}});
        if (!req.params.username) {
            return res.json({data: requestDB});
        } else{
            if (requestDB.length <1) {
            return res.status(404).json({msg: "Data Not Found"});
            }else{
                return res.json({data: requestDB[0]})
            }
        }
    }catch(error){
        return res.status(500).json({msg: error.toString()});
    }
};

module.exports = {service}