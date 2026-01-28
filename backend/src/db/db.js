const mongoose=require('mongoose')

function connectToDB() {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('mongo connected')
    }).catch((err)=>{
        console.log('mongo not connected',err)
    })
}
module.exports=connectToDB