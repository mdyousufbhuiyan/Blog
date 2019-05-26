const express = require('express')

const Router = express();

const ShowSinglePost = require('../Controller/ShowSinglePost')
const validateUserComment = require('../Controller/Validation/Comment')

var checkLoginStatus = (req, res, next) => {
    if (req.cookies.user_sid && req.session.user) {
        next()
    } else {
        req.session.name = 'showsinglepost'
        req.session.postId = req.params.id;
        res.redirect('/ourblog/login/')

    }
}





Router.get('/:id', checkLoginStatus, ShowSinglePost.getSinglePost)





module.exports = Router;