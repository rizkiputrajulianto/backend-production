var express = require('express');
var router = express.Router();
const UserRoutes = require('../controller/User/routes')

router.use('/user', UserRoutes);

module.exports = router;
