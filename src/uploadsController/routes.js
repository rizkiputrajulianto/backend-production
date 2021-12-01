const express = require('express');
const router = express.Router();
const auth = require('../middleware/jwt');
const getLink = require('./upload.imagesController');
const multer = require('multer');
const storageImage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/images');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname);
	}
});
const storageFile = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/doc');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname);
	}
});
const fileFilterImage = (req, file, cb) => {
	if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
		cb(null, true);
	}
	else {
		cb(null, false);
	}
};
const fileFilterFiles = (req, file, cb) => {
	if (file.mimetype === 'application/vnd.ms-powerpoint' || file.mimetype === 'application/pdf') {
		cb(null, true);
	}
	else {
		cb(null, false);
	}
};
const uploadImage = multer({
	storage: storageImage,
	limits: { fileSize: 1024 * 1024 * 5 },
	fileFilter: fileFilterImage
});
const uploadFile = multer({ storage: storageFile, fileFilter: fileFilterFiles });

router.post('/avatar', auth.checkJwt, uploadImage.single('avatar'), getLink.service);
router.post('/files', auth.checkJwt, uploadFile.single('material'), getLink.service);

module.exports = router;
