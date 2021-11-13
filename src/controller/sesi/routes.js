const express = require('express');
const router = express.Router();
const postJadwal = require('./create.jadwalController');
const getJadwal = require('./get.jadwalController');


router.post('/', postJadwal.service);
router.get('/', getJadwal.service);
router.get('/:kode', getJadwal.service);


module.exports = router;