const mongoose = require('mongoose')

function connectToDB() {
    if (!process.env.MONGO_URL) {
        console.warn('  MONGO_URL not set in environment variables')
        return
    }
    
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connected')
    }).catch((err) => {
        console.error(' MongoDB connection failed:', err.message)
    })
}

module.exports = connectToDB