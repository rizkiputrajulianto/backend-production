const express = require('express');
const router = express.Router();
const kotaGet = require('./get.kotaController');
const auth = require('../../middleware/jwt');

router.get('/', auth.checkJwt, kotaGet.service);

module.exports = router;
