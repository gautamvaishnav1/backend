require('dotenv').config()
const express = require('express')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.route')
const foodRouter = require('./routes/food.route')
const userInfoRouter = require('./routes/userInfo.route')
const app = express()

app.use(cors({
  origin: "https://animated-telegram-5gxj696j7jq437xwr-5173.app.github.dev", // your frontend
  credentials: true
}))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.get('/', (req, res) => {
    res.send('fdk')
})
app.use('/api/auth', authRouter)
app.use('/api/food', foodRouter)
app.use('/api/found',userInfoRouter)
module.exports = app