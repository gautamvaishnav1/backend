const express=require('express')
const getInfoController=require('../controllers/getInfo.controller')
const authMiddleware=require('../middleware/Auth.middleWare')
const userInfoRouter=express.Router()

userInfoRouter.get('/user',authMiddleware.authUserMiddleware,getInfoController.userFindController)
userInfoRouter.get('/foodPartner',authMiddleware.authFoodPartnerMiddleware,getInfoController.FoodPartnerFindController)
module.exports=userInfoRouter