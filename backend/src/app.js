require('dotenv').config()
const express = require('express')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.route')
const foodRouter = require('./routes/food.route')
const userInfoRouter = require('./routes/userInfo.route')
const likeRouter = require('./routes/like.route')
const saveRouter = require('./routes/save.route')
const app = express()

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://ominous-space-guacamole-g47j9p9jjq653wjvg-5173.app.github.dev'
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/food', foodRouter)
app.use('/api/found',userInfoRouter)
app.use('/api',likeRouter)
app.use('/api',saveRouter)
module.exports = app