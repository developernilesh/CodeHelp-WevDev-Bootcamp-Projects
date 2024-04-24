const express = require("express")
const app = express();

// load config from env file
require('dotenv').config()
const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())  

// import routes from api
const todoRoutes = require('./routes/todos')

// mount the todo api routes
app.use('/api/v1',todoRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
})

// connect to the DataBase
const dbConnect = require('./config/database')
dbConnect();

// default route
app.get('/', (req,res)=> {
    res.send(`<h1>This is the homepage</h1>`)
})