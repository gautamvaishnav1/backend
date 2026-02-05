const jwt=require('jsonwebtoken')
const foodPartnerModel = require('../models/foodPartner.model');
const userModel = require('../models/user.model');

exports.authFoodPartnerMiddleware=async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"unauthorized access please login first"
        })
    }
    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        const foodPartner=await foodPartnerModel.findById(decode.id);
        req.foodPartner=foodPartner;
        next()
        
    } catch (error) {
        res.status(401).json({
            message:"Invalid token"
        })
    }
}


exports.authUserMiddleware=async (req,res,next) => {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({
                message:"unauthorized access"
            })
        }   
        try {
            const decode=jwt.verify(token,process.env.JWT_SECRET)
            const user= await userModel.findById(decode.id)
            req.user=user
            next()
        } catch (error) {
            res.status(401).json({
                message:"unauthorized access"
            })
        } 
}