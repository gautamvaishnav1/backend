require('dotenv').config()
const app = require("./src/app");
const connectToDB = require('./src/db/db');

connectToDB()

const PORT = process.env.PORT || 4000

app.listen(PORT,'0.0.0.0', () => {
    console.log(`your port is running on ${PORT}`)
})