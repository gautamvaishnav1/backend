const express = require('express')
const authController = require('../controllers/auth.controller.js')
const authValidator= require('../validator/auth.validator.js')
const authRouter = express.Router()
//user
authRouter.post('/user/register', 
    authValidator.authUserRegisterValidator,
    authController.postRegisterUser
)
authRouter.post('/user/login',
    authValidator.authUserLoginValidator,
     authController.postLoginUser
    )

authRouter.post('/user/logout', authController.postLogoutUser)

//foodPartner
authRouter.post('/foodPartner/register',
    authValidator.authFoodPartnerRegisterValidator,
     authController.postRegisterFoodPartner
    )

authRouter.post('/foodPartner/login',
    authValidator.authFoodPartnerLoginValidator,
     authController.postLoginFoodPartner
    )
    
authRouter.post('/foodPartner/logout', authController.postLogoutFoodPartner)
module.exports = authRouter