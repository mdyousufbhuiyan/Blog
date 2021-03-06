const {
    check,
    validationResult
} = require('express-validator/check')

const Blog = require('../model/mysql_connection')



const getLoginPage = (req, res, next) => {

    // console.log(`getLoginPage  ${req.session.name}`);

    renderLoginPageWithValue(res, getLoginObj(null, null), false)


}


const logIn = (req, res, next) => {
    var email = req.body.email
    var password = req.body.password

    var sql = `Select * from registration where email='${email}' 
    && password = '${password}'`


    Blog.query(sql, (error, result, field) => {
        if (error) {
            renderLoginPageWithValue(res, getLoginObj(email, password), true)


        } else {
            if (result.length > 0) {
                req.session.user = result;
                let name = req.session.name;
                let postId = req.session.postId;
                if (name) {
                    if (postId) {
                        res.redirect(`/ourblog/${name}/${postId}`)
                    } else {
                        res.redirect(`/ourblog/${name}/`)
                    }

                } else
                    res.redirect('/ourblog/home/');

            }
        }

    })
}


var renderLoginPageWithValue = (res, logindata, errorResult) => {
    res.render('Login', {
        logindata,
        errorResult
    })
}

var getLoginObj = (email, password) => {
    return {
        email,
        password
    }

}



module.exports = {
    getLoginPage,
    logIn
}