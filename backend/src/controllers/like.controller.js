const likeModel=require('../models/like.model')

exports.postLikeByUser=async(req,res)=>{
    const user=req.user
    console.log(user,"user")
}