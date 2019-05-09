const express = require('express');
const categoryController = require('../Controller/category')

const router = express();
const { check, validationResult } = require('express-validator/check');

const CategoryValidator= require('../Controller/Validation/Category')

router.get('/', categoryController.getCategoryPage)
router.get('/data/', categoryController.getAllCategory)
router.post('/',CategoryValidator.validateCategory(),categoryController.addCategory)


module.exports = router;