const foodModel = require("../models/food.model");
const storeAgeServices = require("../services/storage.service");
const { v4: uuid } = require("uuid");

exports.createFood = async (req, res) => {
  console.log(req.body, "body");
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
    food:foodItemCreate
  });
  console.log(fileUploadResult);
};


exports.getAllFoodItems=async (req,res) => {
  const foodItems=await foodModel.find()
  res.status(200).json({
    message:"success",
    foodItems:foodItems
  })

  
}