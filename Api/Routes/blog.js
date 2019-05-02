const express = require('express');
const blogController = require('../Controller/blog')
const router = express();

var multer  = require('multer')
var upload = multer({ dest: '/public/images/upload' })

router.get('/',blogController.getAllPost)



module.exports = router