const express = require("express");

const path = require('path')
const router = express.Router()
const blogController = require('../controller/home')


router.get('/', blogController.getHome)




module.exports = router