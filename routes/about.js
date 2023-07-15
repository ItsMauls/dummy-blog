const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const router = express.Router()
const blogController = require('../controller/about')


router.get('/about', blogController.getAbout)

module.exports = router