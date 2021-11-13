const express = require('express');
const router = express.Router();
const getPublicClass = require('./get.classController');
const postClass = require('./create.classController');
const putClass = require('./update.classController');
const deleteClass = require('./delete.classController');


router.get('/', getPublicClass.service);
router.get('/:kode', getPublicClass.service);
router.post('/', postClass.service);
router.put('/:kode', putClass.service);
router.delete('/:kode', deleteClass.service);


module.exports = router;