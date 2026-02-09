const express=require('express')
const getInfoController=require('../controllers/getInfo.controller')
const authMiddleware=require('../middleware/Auth.middleWare')
const userInfoRouter=express.Router()

userInfoRouter.get('/user',authMiddleware.authUserMiddleware,getInfoController.userFindController)

module.exports=userInfoRouter