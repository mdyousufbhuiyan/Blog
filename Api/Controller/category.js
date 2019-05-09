const Blog = require('../model/mysql_connection')
// ...rest of the initial code omitted for simplicity.
const {
    check,
    validationResult
} = require('express-validator/check');



const getCategoryPage = (req, res, next) => {
    res.render("category")
};
const getAllCategory = (req, res, next) => {
    var rawQuery = "Select * from category";
    Blog.query(rawQuery, (error, result, field) => {
        if (error) throw error;

        res.status(200).json({
            result
        });

    });
};


const addCategory = (req, res, next) => {
    var name = req.body.name;
    var category = {
        name
    };





    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('errors');
        // return res.render('addpost',{
        //     error: "error"
        // })
        var er = {
            error: "error"
        }
        res.json({
            error: "error"
        });
        // return res.status(422).json({
        //     error: "error"
        // });
    } else {


        var sql = "INSERT INTO category SET ?";

        Blog.query(sql, category, function (err, result) {
            if (err) throw err;
            console.log(`${name} Category Inserted`);
            // res.json({
            //     message: "Saved",
            //     Result: result.affectedRows
            // });

            res.json({
                error: "success"
            });

        });
    }

};

module.exports = {
    getAllCategory,
    addCategory,
    getCategoryPage
}