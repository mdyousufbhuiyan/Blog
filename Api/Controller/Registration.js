const Blog = require('../model/mysql_connection');

const {
    check,
    validationResult
} = require('express-validator/check')


const getRegistrationForm = (req, res, next) => {

    renderRegistrationPageWithValue(res, getPersonObject(null, null, null, null, null), false, false)
}

const addMember = (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    var dateofbirth = req.body.dateofbirth;
    var gender = req.body.gender;
    console.log('datefobirth before: ' + dateofbirth);
    dateofbirth = dateofbirth.replace('/', '-')
    console.log('datefobirth : ' + dateofbirth);


    var errorResult = validationResult(req);
    if (!errorResult.isEmpty()) {
        console.log('Error');
        renderRegistrationPageWithValue(res, getPersonObject(name, email, password, dateofbirth, gender), true, false)

    } else {
        var checkEmail = `SELECT * FROM registration WHERE email 
        = '${email}'`

        Blog.query(checkEmail, (error, result, field) => {
            if (error)
                return true;
            if (result.length > 0) {
                console.log('Email  Exist');
                renderRegistrationPageWithValue(res, getPersonObject(name, email, password, dateofbirth, gender), true, true)
            } else {
                console.log('Email not Exist');

                const insertionCommand = `INSERT INTO registration(name,email,password,dateofbirth,gender) values('${name}','${email}','${password}','${dateofbirth}',
              '${gender}')`

                Blog.query(insertionCommand, (error, result) => {

                    if (error) {
                        renderRegistrationPageWithValue(res, getPersonObject(name, email, password, dateofbirth, gender), true, false)
                    } else {
                        // renderRegistrationPageWithValue(res, getPersonObject(null, null, null, null, null), false, false)

                        res.redirect('/ourblog/login/')

                    }
                })

            }
        })
    }

}




var renderRegistrationPageWithValue = (res, person, errorResult, isEmailAlreadyExist) => {
    res.render('registration', {
        person,
        errorResult,
        isEmailAlreadyExist
    })
}


var getPersonObject = (name, email, password, dateofbirth, gender) => {

    return {
        name,
        email,
        password,
        dateofbirth,
        gender
    }

}


module.exports = {
    getRegistrationForm,
    addMember
}