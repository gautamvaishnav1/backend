const express = require('express')
const multer=require('multer')
const upload=multer({
    storage:multer.memoryStorage()
})

const foodController = require('../controllers/food.controller')
const authMiddleware = require('../middleware/Auth.middleWare')

const foodRouter = express.Router()
foodRouter.post('/', authMiddleware.authFoodPartnerMiddleware,upload.single('video'), foodController.createFood)

module.exports = foodRouter