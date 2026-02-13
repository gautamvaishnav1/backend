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