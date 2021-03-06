const express = require('express');
const router = express.Router();
const postMateri = require('./create.materiController');
const getMateri = require('./get.materiController');
const putMateri = require('./update.materiController');
const deleteMateri = require('./delete.materiController');
const getOneMateri = require('./getOne.materiController');
const validator = require('../../helpers/validator');
const auth = require('../../middleware/jwt');


router.get('/',auth.checkJwt, getMateri.service);
router.get('/:kode',auth.checkJwt, getMateri.service);
router.get('/one/:id', auth.checkJwt, getOneMateri.service);
router.post('/',auth.checkJwtAdmin, postMateri.service);
router.put('/:id',auth.checkJwtAdmin, putMateri.service);
router.delete('/:id',auth.checkJwtAdmin, deleteMateri.service);


module.exports = router;