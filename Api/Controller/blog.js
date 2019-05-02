
var Blog  = require('../model/mysql_connection')




const getAllPost = (req, res, next) => {
    var rawQuery = "Select * from add_blog";
    Blog.query(rawQuery, (error, result, field) => {
        if (error) throw error;

        // res.status(200).json({
        //     result
        // });
        res.render('home', {
            allBlog:result
        })
    });
};


// let getAllPost = (req, res, next) => {

//     res.render('home', {
//         arr
//     })

// }



module.exports = {
    getAllPost

}