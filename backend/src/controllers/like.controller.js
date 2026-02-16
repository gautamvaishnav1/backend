const foodModel = require('../models/food.model');
const likeModel=require('../models/like.model')

exports.postLikeByUser=async(req,res)=>{
    const user=req.user;
    const postId=req.body.postId
    try {
        const isAlreadyLike=await likeModel.findOne({
            userId:user._id,
            postId
        })
        if(isAlreadyLike){
            await likeModel.deleteOne({
                userId:user._id,
                postId
            })
        return res.status(201).json({
            message:'food unLike successFully'
        })                       
        }
        const like=await likeModel.create({
            userId:user._id,
            postId
        })
        console.log(like)
        res.status(200).json({
            message:"food add success fully",
            like

        })


    } catch (error) {
        res.status(500).json({
            message:'internal server error'
        })
    }


}

exports.getLikeReelsByUser=async(req,res)=>{
    const id=req.user._id;
   
  try {
    
      const likes=await likeModel.find({userId:id})
      console.log(isExist)
    if(!likes){
        return res.status(200).json({
            message:"no reel like yet"
        })
    }
    const postIds=likes.map(like=>like.postId)
    const reels=await foodModel.findById({_id:postIds})
    console.log(reels)
    res.status(200).json({
        message:"reels",
        reels
    })
  } catch (error) {
    res.status(500).json({
        message:"internal server error"
    })
  }

}