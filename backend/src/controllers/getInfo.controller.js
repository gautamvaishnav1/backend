const userModel=require('../models/user.model')
const jwt=require('jsonwebtoken')
exports.userFindController=async(req,res)=>{
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