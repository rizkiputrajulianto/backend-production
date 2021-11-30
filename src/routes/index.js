var express = require('express');
var router = express.Router();
const UserRoutes = require('../controller/User/routes');
const ClassRoutes = require('../controller/Kelas/routes');
const JadwalRoutes = require('../controller/sesi/routes');
const MateriRoutes = require('../controller/materi/routes');
const memberRoutes = require('../controller/member/routes');
const kota = require('../controller/kota/routes');
const absensi = require('../controller/presensi/routes');

router.use('/user', UserRoutes);
router.use('/class', ClassRoutes);
router.use('/jadwal', JadwalRoutes);
router.use('/materi', MateriRoutes);
router.use('/member', memberRoutes);
router.use('/kota', kota);
router.use('/absen', absensi);

module.exports = router;
