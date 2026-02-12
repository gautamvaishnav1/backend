const userModel=require('../models/user.model')
const foodPartnerModel=require('../models/foodPartner.model')
const foodModel = require('../models/food.model')
exports.userFindController=async(req,res)=>{
 
    const user=req.user
        res.status(200).json({
            user:{
                role:'user',
                email:user.email,
                fullName:user.fullName,
            }
        })
}


exports.FoodPartnerFindController=async(req,res)=>{
    const foodPartner=req.foodPartner
    const ID=req.foodPartner._id
            const reels=await foodModel.find({foodPartner:ID})
            
    res.status(200).json({
        foodPartner:{
            role:'foodPartner',
            email:foodPartner.email,
            fullName:foodPartner.fullName,
            address:foodPartner.address,
            id:foodPartner._id,
            reels:reels,
            phoneNumber:foodPartner.phoneNumber

        }
    })
}