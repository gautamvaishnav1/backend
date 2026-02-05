const foodModel = require("../models/food.model");
const storeAgeServices=require('../services/storage.service')
const {v4:uuid}=require('uuid')
exports.createFood = async (req, res) => {
   const fileUploadResult=await storeAgeServices.uploadFile(req.file.buffer,uuid())
}