const jwt=require('jsonwebtoken')
const foodPartnerModel = require('../models/foodPartner.model')

exports.authFoodPartnerMiddleware=async(req,res,next)=>{
    const token=req.cookie.token;
    if(!token){
        return res.status(401).json({
            message:"unauthorized access please login first"
        })
    }
    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        const foodPartner=await foodPartnerModel.findById(decode._id);
        req.foodPartner=foodPartner;
        next()
        
    } catch (error) {
        res.status(401).json({
            message:"Invalid token"
        })
    }
}