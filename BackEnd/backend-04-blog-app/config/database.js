const mongoose = require("mongoose");

require("dotenv").config();

const connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB connection successful"))
    .catch((error)=>{
        console.log("Issue in DB connection",error)
        process.exit(1);
    })
}

module.exports = connectDb;