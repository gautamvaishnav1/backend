const userModel=require('../models/user.model')
exports.userFindController=async(req,res)=>{
    console.log(req,"body")
    console.log(req.user)
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
    console.log(req.foodPartner)
    const foodPartner=req.foodPartner
    res.status(200).json({
        foodPartner:{
            role:'foodPartner',
            email:foodPartner.email,
            fullName:foodPartner.fullName,
            address:foodPartner.address,
            phoneNumber:foodPartner.phoneNumber

        }
    })
}