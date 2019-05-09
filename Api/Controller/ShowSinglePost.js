const Blog = require('../model/mysql_connection')
const {
    check,
    validationResult
} = require('express-validator/check')



const getSinglePost = (req, res, next) => {
    let id = req.params.id
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


const addPost = (req, res, next) => {

    var blog_id = req.body.id
    var name = req.body.name;
    var email = req.body.email;
    var body = req.body.body;


    
    console.log(`INSERT INTO user_comment(name,email,body,blog_id) VALUES(${name},${email},${body},${blog_id})`)

    var result = validationResult(req)
    if (!result.isEmpty()) {

        console.log('Error : ' + result)
        res.json({
            message: "error"
        })
    } else {
        var sql =`INSERT INTO user_comment(name,email,body,blog_id) VALUES('${name}','${email}','${body}','${blog_id}')`
        Blog.query(sql, (error, result) => {

            if (error) throw error

            console.log('inserted');

            res.json({
                message: "Comment Added"
            })

        })
    }
}






module.exports = {
    getSinglePost,
    addPost
}