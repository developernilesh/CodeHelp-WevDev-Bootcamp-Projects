//Server Instataneate
const express = require('express')
const app = express();

// Parse JSON data
app.use(express.json());

// Activate the server on 3000 port
app.listen(3000, () => {
    console.log('Server started at port: 3000');
})

// Routes
app.get('/',(req,res) => {
    res.send("I am learning Backemd Development")
})

app.post('/api/cars', (req,res) => {
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car submitted")
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
.then(() => {console.log("Connection Sucessful")})
.catch((error) => {console.log("Received an error",error)})