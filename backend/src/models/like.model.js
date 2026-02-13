const mongoose =require('mongoose');

const likeSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userInfoS',
        required:true,
    }
})


const likeModel=mongoose.model('like',likeSchema)

module.exports=likeSchema;


