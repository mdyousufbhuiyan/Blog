const express = require('express');
const categoryController = require('../Controller/category')

const router = express();
const {
    check,
    validationResult
} = require('express-validator/check');

const CategoryValidator = require('../Controller/Validation/Category')
var checkLoginStatus = (req, res, next) => {
    if (req.cookies.user_sid && req.session.user) {
        next()
    } else {
        req.session.name = 'category'
        res.redirect('/ourblog/login/')
    }
}


router.get('/', checkLoginStatus, categoryController.getCategoryPage)
router.get('/data/', categoryController.getAllCategory)
router.post('/', CategoryValidator.validateCategory(), checkLoginStatus, categoryController.addCategory)


module.exports = router;