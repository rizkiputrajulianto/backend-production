const express = require('express');
const router = express.Router();
const UserLogin = require('./login.userController');
const UserRegister = require('./register.userController');
const getUsers = require("./get.usersController");
const putUsers = require("./update.userController");
const delUsers = require("./delete.usersController");
const validator = require('../../helpers/validator');
const auth = require('../../middleware/jwt');


router.post('/login',UserLogin.validation,validator, UserLogin.service);
router.post('/register',UserRegister.validation, validator, UserRegister.service);
router.get('/',auth.checkJwt, getUsers.service);
router.get('/:username', getUsers.service);
router.put('/', auth.checkJwt, putUsers.service);
router.delete('/:username',auth.checkJwtAdmin, delUsers.service)

module.exports = router;