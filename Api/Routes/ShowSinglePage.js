const express = require('express')

const Router = express();

const ShowSinglePost = require('../Controller/ShowSinglePost')
const validateUserComment = require('../Controller/Validation/Comment')



Router.get('/:id', ShowSinglePost.getSinglePost)
Router.post('/', validateUserComment(), ShowSinglePost.addPost)
//Router.post('/:id', )






module.exports = Router;