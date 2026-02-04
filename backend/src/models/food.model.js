const mongoose=require('mongoose')

const foodSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    video:{
        type:String,
        required:true,
    },
    description:{
        type:String
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'foodPartner',
        required:true
    }
})

const foodModel=mongoose.model('foodReel',foodSchema)


module.exports=foodModel;