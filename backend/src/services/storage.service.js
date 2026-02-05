const ImageKit=require('imagekit')

const imageKit=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATEKEY,
    publicKey:process.env.IMAGEKIT_PUBLICKEY,
    urlEndpoint:process.env.IMAGEKIT_URLENDPOINT
})

exports.uploadFile=async(file,fileName)=>{
    const result=await imageKit.upload({
        file:file,
        fileName:fileName
    })
    return result
} 