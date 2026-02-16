const foodModel = require('../models/food.model');
const saveReelModel=require('../models/save.model');
const userModel = require('../models/user.model');

exports.postSave=async(req,res)=>{
    const id=req.user._id;
    const postId=req.body.postId;
    try {        
       const isAlreadySave=await saveReelModel.findOne({postId,userId:id})
        if(!isAlreadySave){
                  const saveReel= await saveReelModel.create({
            userId:id,
            postId
             })
        res.status(201).json({
            message:"save reel"
        })
    }

       else{
         const unsave= await saveReelModel.deleteOne({
            postId,
            userId:id
        })
        return res.status(200).json({
            message:"unsave reel"
        })
       }
    
    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error
        })
    }
}

exports.getSaveReel=async (req,res) => {
        const userId=req.user._id;
     try {
        
      const saveReels=await saveReelModel.find({userId})
        if(!saveReels){
           return res.status(200).json({
                message:'no reels save yet',
                reels:[]
            })
        }
        const postIds=saveReels.map(save=>save.postId)
        const reels=await foodModel.find({_id:postIds})
        res.status(200).json({
            message:"reels",
            reels
        })
     } 
     catch (error) {
        res.status(500).json({
            message:"Internal server error"
        })
     }
        
}