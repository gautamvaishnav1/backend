const express=require('express')
const saveController=require('../controllers/save.controller')
const authMiddleware=require('../middleware/Auth.middleWare')
const saveRouter=express.Router()

saveRouter.post('/user/save',authMiddleware.authUserMiddleware,saveController.postSave)
saveRouter.get('/user/save/:id',authMiddleware.authUserMiddleware,saveController.getSaveReel)

module.exports=saveRouter