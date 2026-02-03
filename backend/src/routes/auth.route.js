const express=require('express')
const authController=require('../controllers/auth.controller.js')

const authRouter=express.Router()
//user
authRouter.post('/user/register',authController.postRegisterUser)
authRouter.post('/user/login',authController.postLoginUser)
authRouter.post('/user/logout',authController.postLogoutUser)

//foodPartner
authRouter.post('/foodPartner/register',authController.postRegisterFoodPartner)
authRouter.post('/foodPartner/login',authController.postLoginFoodPartner)
authRouter.post('/foodPartner/logout',authController.postLogoutFoodPartner)
module.exports=authRouter