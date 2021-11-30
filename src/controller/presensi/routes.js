const express = require('express');
const router = express.Router();
const absen = require('./create.presenceController');
const getAbsen = require('./get.presenceController');
const auth = require('../../middleware/jwt');

router.post('/', auth.checkJwt, absen.service);
router.get('/', auth.checkJwt, getAbsen.service);

module.exports = router;
