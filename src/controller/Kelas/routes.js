const express = require('express');
const router = express.Router();
const getPublicClass = require('./get.classController');
const getallClass = require('./get2.classController');
const postClass = require('./create.classController');
const putClass = require('./update.classController');
const deleteClass = require('./delete.classController');
const auth = require('../../middleware/jwt');

router.get('/following', auth.checkJwt, getallClass.service);

router.get('/', getPublicClass.service);
router.get('/:kode', getPublicClass.service);
router.post('/', postClass.service);
router.put('/:kode', putClass.service);
router.delete('/:kode', deleteClass.service);

module.exports = router;
