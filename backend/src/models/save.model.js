const mongoose=require('mongoose');

const saveSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userInfos",
        required:true
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'foodReel',
        required:true,
    }
},{timestamps:true})


const saveReelModel=mongoose.model('saveReel',saveSchema)


module.exports=saveReelModel