const express = require('express')

const loginController = require('../Controller/Login')

const Router = express()



Router.get('/', loginController.getLoginPage)
Router.post('/', loginController.logIn)



module.exports = Router;