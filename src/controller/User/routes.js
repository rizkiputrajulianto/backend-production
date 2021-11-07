const express = require('express');
const router = express.Router();
const UserLogin = require('./login.userController');
const UserRegister = require('./register.userController');


router.post('/login', UserLogin.service);
router.post('/register', UserRegister.service);


module.exports = router;