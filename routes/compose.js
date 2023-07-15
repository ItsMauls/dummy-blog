const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const router = express.Router()
const blogController = require('../controller/compose')


router.get('/compose', blogController.getCompose)
router.post('/compose',blogController.postCompose)

module.exports = router