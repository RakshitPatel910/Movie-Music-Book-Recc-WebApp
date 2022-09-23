const express = require('express')
const axios = require('axios')
const router = express.Router();
const mongoose = require('mongoose')
require("../db/conn");
const User = require("../model/userSchema");

const key = process.env.key

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
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
    )
    // console.log(movie.data)
    const date = new Date().toDateString()
    console.log(date)
    const data = movie.data.genres
    let genre = []
    data.map(e=>{
        genre.push({
            "genreId": `${e.id}`
        })
    })
    console.log(genre)
    const user = await User.findById(_id)
    let count = 0;
    user.watchlist.map(e=>{
        if(e.movieId == movieId){
            count++;
        } 
    })
    if(count > 0){
        return res
        .status(404)
        .json({ message: "Movie is already added to Watchlist", status: false });
    }
    else{
        const newMovie = {
          movieId: `${movieId}`,
          genre: [],
          date: date,
        };
        genre.map(e=>{
            newMovie.genre.push(e)
        })
        user.watchlist.push(newMovie)
        console.log(user)
        const updatedUser = await User.findByIdAndUpdate(_id,user)
        return res.json({message:"Movie added to Watchlist",status:true})
    }
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

router.post('/deleteWatchlist',async (req,res)=>{
    const {_id}  = req.body
    let user = await User.findById(_id)
   
    for(let i=0;i<=user.watchlist.length;i++){
        if(user.watchlist.length == 0){
            break;
        }
        else{
            user.watchlist.splice(i,i+1)
            i--;
        }
    }
    await User.findByIdAndUpdate(_id,user)
    return res.json({message:"Watchlist deleted",status:true})
})

router.get('/getWatchedlist',async (req,res)=>{
    const {_id} = req.body
    let data = []
    let user = await User.findById(_id)
    user.watchlist.map(e=>{
        if(e.isWatched == true){
            data.push(e)
        }
    })
    return res.json({watched:data,status:true})

})

router.post('/addToWatchedlist',async (req,res)=>{
    const {_id,movieId} = req.body
    let user = await User.findById(_id)
    user.watchlist.map(e=>{
        if(e.movieId == movieId){
            e.isWatched = true
            e.isWatching = false
        }
    })  
    await User.findByIdAndUpdate(_id,user)
    return res.json({message:"Successfully added to watched list",status:true})
})

router.get('/getWatchingList',async (req,res)=>{
    const {_id}  = req.body
    const user = await User.findById(_id)
    let data = []
    user.watchlist.map(e=>{
        if(e.isWatching == true){
            data.push(e)
        }
    })

    return res.json({WatchingMovie:data,status:true})
})

router.post('/addToWatchinglist',async (req,res)=>{
    const {_id,movieId} = req.body
    let user = await User.findById(_id)
    user.watchlist.map(e=>{
        if(e.movieId == movieId){
            e.isWatching = true
            e.isWatched = false
        }
    })
    await User.findByIdAndUpdate(_id, user);
    return res.json({message:"Successfully added to Watching list",status:true})
    
})



module.exports = router;