const express = require("express");
const router = express.Router()
const blogController = require('../controller/post')

router.get('/posts/:articleId', blogController.getParams)

module.exports = router