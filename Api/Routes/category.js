const express = require('express');
const categoryController = require('../Controller/category')

const router = express();
const { check, validationResult } = require('express-validator/check');

router.get('/', categoryController.getCategoryPage)
router.get('/data/', categoryController.getAllCategory)
router.post('/',[
    // username must be an email
    check('name').isLength({min:5})
  ] ,categoryController.addCategory)


module.exports = router;