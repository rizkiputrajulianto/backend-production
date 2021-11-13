var express = require('express');
var router = express.Router();
const UserRoutes = require('../controller/User/routes');
const ClassRoutes = require('../controller/Kelas/routes');
const JadwalRoutes = require('../controller/sesi/routes');
const MateriRoutes = require('../controller/materi/routes');

router.use('/user', UserRoutes);
router.use('/class', ClassRoutes);
router.use('/jadwal', JadwalRoutes);
router.use('/materi', MateriRoutes);

module.exports = router;
