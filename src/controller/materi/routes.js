const express = require('express');
const router = express.Router();
const postMateri = require('./create.materiController');
const getMateri = require('./create.materiController');


router.get('/', getMateri.service);
router.post('/', postMateri.service);


module.exports = router;