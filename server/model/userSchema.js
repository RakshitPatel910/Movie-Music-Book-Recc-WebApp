const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  // _id:String,
  userName: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  watchlist: [
    {
      movieId: String,
      isWatching: Boolean,
      isWatched: Boolean,
      genre: [
        {
          genreId: String,
        },
      ],
      date: Date,
    },
  ],
  profilePhoto:{
    type:String,
    default:null
  }
}); 

const  User = mongoose.model('User',userSchema)

module.exports = User;