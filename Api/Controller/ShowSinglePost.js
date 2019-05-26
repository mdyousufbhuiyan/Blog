const Blog = require('../model/mysql_connection')
const {
    check,
    validationResult
} = require('express-validator/check')



const getSinglePost = (req, res, next) => {
    let id = req.params.id


    //  res.redirect('/ourblog/login/')

    var rawQuery = `Select * from add_blog where id = ${id} `
    Blog.query(rawQuery, (error, result, field) => {
        if (error) {
            console.log("error: " + error)
        }
        res.render('ShowSinglePost', {
            result: result
        })
    })
}







module.exports = {
    getSinglePost
}