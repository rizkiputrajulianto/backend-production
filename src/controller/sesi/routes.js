const express = require('express');
const router = express.Router();
const postJadwal = require('./create.jadwalController');
const getJadwal = require('./get.jadwalController');
const putJadwal = require('./update.jadwalController');
const deleteJadwal = require('./delete.jadwalController');


router.post('/', postJadwal.service);
router.get('/', getJadwal.service);
router.get('/:kode', getJadwal.service);
router.put('/:kode', putJadwal.service);
router.delete('/:kode', deleteJadwal.service);


module.exports = router;