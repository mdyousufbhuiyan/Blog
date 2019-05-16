const express = require('express')

const validateRegistrationForm = require('../Controller/Validation/Registration')
const RegistrationControler = require('../Controller/Registration')

const Router = express();



Router.get('/', RegistrationControler.getRegistrationForm)
Router.post('/', validateRegistrationForm(), RegistrationControler.addMember)



module.exports = Router;