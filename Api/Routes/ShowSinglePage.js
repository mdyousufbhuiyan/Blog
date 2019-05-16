const express = require('express')

const Router = express();

const ShowSinglePost = require('../Controller/ShowSinglePost')
const validateUserComment = require('../Controller/Validation/Comment')



Router.get('/:id', ShowSinglePost.getSinglePost)





module.exports = Router;