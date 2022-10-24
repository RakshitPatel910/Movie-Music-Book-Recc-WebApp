const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
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
  profilePhoto:String
}); 

const  User = mongoose.model('User',userSchema)

module.exports = User;