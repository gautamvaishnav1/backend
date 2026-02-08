require('dotenv').config()
const express = require('express')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.route')
const foodRouter = require('./routes/food.route')
const app = express()

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)

    if (
      origin === process.env.FRONTEND_URL ||
      origin.endsWith('.app.github.dev')
    ) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
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

module.exports = app