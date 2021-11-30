const express = require('express');
const router = express.Router();
const UserLogin = require('./login.userController');
const UserRegister = require('./register.userController');
const UserProfile = require('./res.usersController');
const userLogout = require('./logout.userController');
const getUsers = require('./get.usersController');
const putUsers = require('./updateUser.userController');
const delUsers = require('./delete.usersController');
const profile = require('./profile.usersController');
const following = require('./follow.usersController');
const validator = require('../../helpers/validator');
const auth = require('../../middleware/jwt');

router.get('/following', auth.checkJwt, following.service);
router.get('/profile', auth.checkJwt, profile.service);
router.post('/login', UserLogin.validation, validator, UserLogin.service);
router.post('/register', UserRegister.validation, validator, UserRegister.service);
router.get('/me', auth.checkJwt, UserProfile.service);
router.post('/logout', auth.checkJwt, userLogout.service);
router.get('/', auth.checkJwt, getUsers.service);
router.get('/:username', auth.checkJwt, getUsers.service);
router.put('/:username', auth.checkJwt, putUsers.service);
router.delete('/:username', auth.checkJwtAdmin, delUsers.service);

module.exports = router;
