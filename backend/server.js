require('dotenv').config()
const app = require("./src/app");
const connectToDB = require('./src/db/db');

const PORT = process.env.PORT || 3000

connectToDB()

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`)
})

server.on('error', (err) => {
    console.error(`❌ Server error:`, err)
    process.exit(1)
})