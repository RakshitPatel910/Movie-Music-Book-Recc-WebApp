const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
   _id:String,
    name:{
        type: String,
        required: true
    },
    email:{
        type:  String,
        required: true
    },
    phone:{
        type: Number,
        required: false
    },
    password:{
        type:String,
        required: true
    },
    watchlist:[
        {
            movieId:String
        }
    ]


    
    
}) 



const  User = mongoose.model('USER',userSchema)

module.exports = User;