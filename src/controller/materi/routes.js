const express = require('express');
const router = express.Router();
const postMateri = require('./create.materiController');
const getMateri = require('./get.materiController');
const putMateri = require('./update.materiController');
const deleteMateri = require('./delete.materiController');


router.get('/', getMateri.service);
router.get('/:kode' , getMateri.service);
router.post('/', postMateri.service);
router.put('/:id', putMateri.service);
router.delete('/:id', deleteMateri.service);


module.exports = router;