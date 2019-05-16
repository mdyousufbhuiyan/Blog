const express = require('express')

const Router = express();

const commentController = require('../Controller/comment')

const validateUserComment = require('../Controller/Validation/Comment')






Router.get('/:id', commentController.getAllComment);
Router.post('/', validateUserComment(),
    commentController.addComment);



module.exports = Router;