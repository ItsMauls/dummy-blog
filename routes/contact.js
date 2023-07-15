const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const router = express.Router()
const blogController = require('../controller/contact')


router.get('/contact', blogController.getContact)

module.exports = router