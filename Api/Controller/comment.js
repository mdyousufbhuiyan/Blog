const Blog = require('../model/mysql_connection')

const {
    check,
    validationResult
} = require('express-validator/check')


const getAllComment = (req, res, next) => {
    var id = req.params.id;

console.log('id '+id);

    var rawQuery = `Select * from user_comment where blog_id = ${id} `

    Blog.query(rawQuery, (error, result, field) => {

        if (error) {
            res.json({
                error: 'error'
            })

        }
        res.json({
            result: result
        })
    })



}



const addComment = (req, res, next) => {

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
        var sql = `INSERT INTO user_comment(name,email,body,blog_id) VALUES('${name}','${email}','${body}','${blog_id}')`
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
    addComment,
    getAllComment
}