require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.route')
const foodRouter = require('./routes/food.route')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.get('/', (req, res) => {
    res.send('fdk')
})
app.use('/api/auth', authRouter)
app.use('/api/food', foodRouter)

module.exports = app