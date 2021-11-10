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
    body('email').notEmpty().withMessage('Email is required').custom(value => {
            return Users.findOne({where:{email:value}}).then(data=>{if(data){ return Promise.reject("Email already Exist")}})}),        
    check('email').isEmail().withMessage("Email is Not Valid"),
    check('username').notEmpty().withMessage('Username is required').isLength({min: 6}).withMessage("Username must be Contain 6 Characters").custom(value => {
            return Users.findOne({where:{username:value}}).then(data=>{if(data){ return Promise.reject("Username already Exist")}})}),
    body('password').notEmpty().withMessage('Password is required').custom(value =>{
        const data = value.split("");
        if(data.length <= 7) {
            return Promise.reject('Password must be 8 Character or long');
        } else{
            return true
        }
    })]

module.exports = {service, validation};