const express = require("express")
const app = express()

require('dotenv').config();
const PORT = process.env.PORT || 3000

app.use(express.json()) 

const blogRoutes = require('./routes/blog')
app.use('/api/v2', blogRoutes)

const connectWithDb = require('./config/database')
connectWithDb();

app.listen(PORT, () => {
    console.log(`server started at Port: ${PORT}`);
})

app.get('/', (req,res) => {
    res.send(`<h1>This is the homepage</h1>`)
})