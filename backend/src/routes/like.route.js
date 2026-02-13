const express=require('express')
const authMiddleware=require('../middleware/Auth.middleWare')
const likeController=require('../controllers/like.controller')
const likeRouter=express.Router()

likeRouter.post('/like',authMiddleware.authUserMiddleware,likeController.postLikeByUser)


module.exports=likeRouter