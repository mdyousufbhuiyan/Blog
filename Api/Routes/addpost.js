const express = require('express');
const addpostController = require('../Controller/addpost')
const {
    check
} = require('express-validator/check')

const router = express();


var sessionChecker = (req, res, next) => {
    if (req.cookies.user_sid && req.session.user) {
        next()
    } else {
        req.session.name = 'addpost'
        res.redirect('/ourblog/login/')
    }
}


router.get('/', sessionChecker, addpostController.showAddPostPage)
router.post('/', sessionChecker, addpostController.addPost)





module.exports = router;