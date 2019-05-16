const {
    check,
    validationResult
} = require('express-validator/check')



const validateRegistrationForm = () => {

    return ([
        check('name').isLength({
            min: 5
        }),
        check('email').isEmail(),
        check('password').isLength({
            min: 5
        }),
        check('dateofbirth').isLength({
            min: 5
        }),
        check('gender').isLength({
            min: 2
        })
    ])

}

module.exports = validateRegistrationForm;