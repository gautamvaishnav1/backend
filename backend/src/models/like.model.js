const mongoose =require('mongoose');

const likeSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userInfoS',
        required:true,
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'foodReel',
        required:true
    }
},{
    timestamps:true 
})


const likeModel=mongoose.model('like',likeSchema)

module.exports=likeModel;


