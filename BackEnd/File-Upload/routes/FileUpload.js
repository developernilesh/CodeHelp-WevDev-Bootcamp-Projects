const express = require('express')
const router = express.Router();

const {localFileUpload} = require('../controllers/fileUpload')

router.post('/local-file-upload',localFileUpload);

module.exports = router