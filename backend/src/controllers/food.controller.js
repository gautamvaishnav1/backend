const { validationResult } = require("express-validator");
const foodModel = require("../models/food.model");
const storeAgeServices = require("../services/storage.service");
const { v4: uuid } = require("uuid");

exports.createFood = async (req, res) => {
 
  const errors=validationResult(req)
 if(!errors.isEmpty()){
       return res.status(400).json({
            message:errors.array()[0].msg
        })
    }
try {
  
  const fileUploadResult = await storeAgeServices.uploadFile(
    req.file.buffer,
    uuid(),
  );
  console.log(fileUploadResult)
  const foodItemCreate = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResult.url,
    foodPartner: req.foodPartner._id,
  });
  console.log(foodItemCreate);
  res.status(201).json({
    message: "success",
    food:foodItemCreate,
    role:'foodPartner'
  });
}
  
 catch (error) {
      res.status(500).json({
        message:"internal server error"
      })
  
}}


exports.getAllFoodItems=async (req,res) => {
  const foodItems=await foodModel.find()
  res.status(200).json({
    message:"success",
    foodItems:foodItems,
    role:'user'
  })

  
}