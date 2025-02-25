const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
    name:String,
    password:{
        type:String
    }
}, {timestamps: true})

module.exports = mongoose.model('users',authSchema)