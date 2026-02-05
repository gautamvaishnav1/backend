const express = require('express')
const multer=require('multer')
const upload=multer({
    storage:multer.memoryStorage()
})

const foodController = require('../controllers/food.controller')
const authMiddleware = require('../middleware/Auth.middleWare')

const foodRouter = express.Router()
//for creating food item by food partner
foodRouter.post('/', authMiddleware.authFoodPartnerMiddleware,upload.single('video'), foodController.createFood)

// for getting all food items by user
foodRouter.get('/', authMiddleware.authUserMiddleware, foodController.getAllFoodItems)
module.exports = foodRouter