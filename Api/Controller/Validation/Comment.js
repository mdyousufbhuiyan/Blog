const {
    validationResult,
    check
} = require('express-validator/check')


const validateUserComment = () => {

    return [
        check('email').isEmail(),
        check('name').isLength({
            min: 3
        }),
        check('body').isLength({
            min:5
        })
    ]
}

module.exports = validateUserComment