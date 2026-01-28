const userModel = require("../models/user.model");
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
exports.postRegisterUser= async(req,res)=>{
    try  {  const {fullName,email,password}=req.body;

            
          const isExist= await userModel.findOne({email})
          if(isExist){
           return  res.status(401).json({
                message:'user already registered'
            })
          }
           const hashPassword=await bcrypt.hash(password,13)
           const user=await userModel.create({fullName,email,password:hashPassword})
          
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
            res.cookie('token',token)

           res.status(201).json({
            message:'user registered successfully',
            user:{
                id:user._id,
                fullName:user.fullName,
                email:user.email   
            }
           })}
      catch(err){   
        console.log(err)
        res.status(500).json({
            message:'internal server error'
        })
      } 
}

exports.postLoginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const isExist=await userModel.findOne({email})
        if(!isExist){
          return res.status(401).json({
                message:'invalid email and password'
        }
        )
        }
        const isPasswordMatch=await bcrypt.compare(password,isExist.password)
        if(!isPasswordMatch){
            return res.status(401).json({
            message:'invalid email and password'
            })
        }
          const token=jwt.sign({id:isExist._id},process.env.JWT_SECRET,{expiresIn:'1d'})
            res.cookie('token',token)
         res.status(200).json({
            message:'user log in successFully',
            user:{
                fullName:isExist.fullName,
                email:isExist.email,
                id:isExist._id,
            }
          })  

    }
    catch(err){
             res.status(500).json({
            message:'internal server error'
        })
    }
}