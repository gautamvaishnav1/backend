const express=require('express')
const authController=require('../controllers/auth.controller.js')

const authRouter=express.Router()
authRouter.post('/user/register',authController.postRegisterUser)
authRouter.post('/user/login',authController.postLoginUser)

module.exports=authRouter