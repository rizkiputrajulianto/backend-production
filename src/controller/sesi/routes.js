const express = require('express');
const router = express.Router();
const postJadwal = require('./create.jadwalController');
const getJadwal = require('./get.jadwalController');
const putJadwal = require('./update.jadwalController');
const deleteJadwal = require('./delete.jadwalController');
const auth = require('../../middleware/jwt');


router.post('/',auth.checkJwtAdmin, postJadwal.service);
router.get('/',auth.checkJwt, getJadwal.service);
router.get('/:kode',auth.checkJwt, getJadwal.service);
router.put('/:kode',auth.checkJwtAdmin, putJadwal.service);
router.delete('/:kode',auth.checkJwtAdmin, deleteJadwal.service);


module.exports = router;