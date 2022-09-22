const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
require("../db/conn");
const User = require("../model/userSchema");
 
router.get('/getWatchlist',async (req,res)=>{
    const {_id} = req.body
    const user = await User.findById(_id)
    const watchlist = user.watchlist
    if(user){
        res.json({watchlist:watchlist,status:true})
    }
    else{
        res.status(404).json({message:"User not found",status:false})
    }
})

router.get('/getGenre',async (req,res)=>{
    const {_id,movieId}  = req.body
    const user = await User.findById(_id)
    let genre = [] 
    user.watchlist.map(e=>{
        if(e.movieId == movieId){
            genre = e.genre
        }
    })
    res.json({genre:genre,status:true})
})

router.post('/addToWatchlist',async (req,res)=>{
    const {_id,movieId} = req.body
    // const id = mongoose.Types.ObjectId(_id)
    const user = await User.findById(_id)
    user.watchlist.map(e=>{
        if(e.movieId == movieId){
            return res.status(404).json({message:"Movie is already added to Watchlist",status:false})
        }
    })
    const newMovie = {
        "movieId":`${movieId}`
    }
    user.watchlist.push(newMovie)
    const updatedUser = await User.findByIdAndUpdate(_id,user)
    return res.json({message:"Movie added to Watchlist",status:true})
})
 
router.post('/deleteFromWatchlist',async (req,res)=>{
    const {_id,movieId} = req.body
    const user = await User.findById(_id)
    for(let i=0;i<user.watchlist.length;i++){
        if(user.watchlist[i].movieId == movieId){
            user.watchlist.splice(i,i+1)
        }
    }
    console.log(user)
    const updatedData = await User.findByIdAndUpdate(_id,user)
    res.json({message:"Movie removed from Watchlist",status:true})
})


module.exports = router;