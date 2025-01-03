const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    name:{
        type: String, required: true,
    },
    imageUrl:{
        type: String, required: true,
    },
    tags:{
        type: String,
    },
    email:{
        type: String,
    },
})

const File = mongoose.model('File', fileSchema);
module.exports = File;