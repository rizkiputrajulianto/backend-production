const {Users} = require('../../models');
const {compareSync} = require('bcrypt');
const {createJWT} = require('../../middleware/jwt');

const service = async (req, res, next) => {
    try {
        const user = await Users.findOne({where : {email : req.body.email}});
        const name = user.name || user.username
            if (user) {
                const validUser = compareSync(req.body.password, user.password);
            if (validUser) {
            return res.json({status: 'success', access: createJWT(user),msg: `Welcome ${name}`});                
            } else {
                return res.status(401).json({msg: 'Wrong Password'})
            }
        } else{
            return res.status(404).json({msg: 'User Not Found'})
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service};