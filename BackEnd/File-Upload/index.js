const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload());

const db = require('./config/database')
db.connect()

const cloudinary = require('./config/cloudinary')
cloudinary.cloudinaryConnect()

const upload = require('./routes/FileUpload')
app.use('/api/upload',upload)

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})