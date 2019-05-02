const express = require('express');
const addpostController = require('../Controller/addpost')
const { check } = require('express-validator/check')

const router = express();


router.get('/', addpostController.showAddPostPage)
router.post('/',  addpostController.addPost)


module.exports = router;