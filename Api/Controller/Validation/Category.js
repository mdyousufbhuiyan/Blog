const {
    check,
    validationResult
} = require('express-validator/check')


const validateCategory = () => {
    return [
        check('name').isLength({
            min: 5
        })

    ]
}




module.exports = {
    validateCategory
}