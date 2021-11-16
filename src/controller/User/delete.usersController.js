const {Users} = require("../../models");

const service = async (req, res, next) => {
    try {
    const where = {username: req.params.username}
        const requestDB = await Users.destroy({where}) 
        if (requestDB) {
            return res.json({msg: "Success to delete User Data"})
        } else{
        return res.status(404).json({msg: "Data failed to delete"})
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service}