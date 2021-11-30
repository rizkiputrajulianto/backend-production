const express = require('express');
const router = express.Router();
const getMember = require('./get.memberController');
const auth = require('../../middleware/jwt');
const postMember = require('./create.memberController');
const delMember = require('./delete.memberController');

router.get('/', auth.checkJwt, getMember.service);
router.get('/:kode', auth.checkJwt, getMember.service);
router.post('/', auth.checkJwt, postMember.service);
router.delete('/:user/:kelas', auth.checkJwt, delMember.service);

module.exports = router;
