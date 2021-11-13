const {Users} = require('../../models');
const {body, check} = require('express-validator');

const service = async (req, res, next) => {
    try {
        const payload = req.body;
        const requestDB = await Users.create(payload);
        return res.json({msg:'Register Success', data:requestDB});
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
};

const validation = [
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email is Not Valid').custom(value => {
            return Users.findOne({where:{email:value}}).then(data=>{if(data){ return Promise.reject("Email already Exist")}})}),        
    body('username').notEmpty().withMessage('Username is required').isLength({min: 6}).withMessage("Username must be Contain 6 Characters").isAlphanumeric().withMessage("Username harus alpha numeric").custom(value => {
            return Users.findOne({where:{username:value}}).then(data=>{if(data){ return Promise.reject("Username already Exist")}})}),
    body('password').notEmpty().withMessage('Password is required').isLength({min: 8})]

module.exports = {service, validation};