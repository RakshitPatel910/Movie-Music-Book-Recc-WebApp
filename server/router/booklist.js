const express = require('express')
const axios = require('axios')
const router = express.Router();
const mongoose = require('mongoose')
require("../db/conn");
const User = require("../model/userSchema");

const key = process.env.bookkey



async function getData(volumeId){

    const data =  await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${volumeId}?key=${key}`
      )

    return {
      data
    }
}

const getWithPromise = async (watchlist)=>{
  
}

router.post('/getBooksByText',async (req,res)=>{
    const {text} = req.body
    const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=${key}`) 
    if(books.length != 0){
        res.json({books:books,status:true})
    }else{
        res.json({message:"Books not found",status:false})
    }
})

router.post('/getBooksByAuthor',async(req,res)=>{
    const {author} = req.body
    const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=+inauthor:${author}&key=${key}`) 
    if(books.length != 0){
        res.json({books:books,status:true})
    }else{
        res.json({message:"Books not found",status:false})
    }
})

router.post('/getBooksByCategory',async(req,res)=>{
    const {category} = req.body
    const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=+subject:${category}&key=${key}`) 
    if(books.length != 0){
        res.json({books:books,status:true})
    }else{
        res.json({message:"Books not found",status:false})
    }
})

router.post('/getBooksByTitle',async(req,res)=>{
    const {title} = req.body
    const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=+intitle:${title}&key=${key}`) 
    if(books.length != 0){
        res.json({books:books,status:true})
    }else{
        res.json({message:"Books not found",status:false})
    }
})

router.post('/getBooks',async(req,res)=>{
    const {text,author,cat,isbn,publisher,title} = req.body
    const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}+intitle:${title}+subject:${cat}+inauthor:${author}+inpublisher:${publisher}+isbn:${isbn}&key=${key}`) 
    if(books.length != 0){
        res.json({books:books,status:true})
    }else{
        res.json({message:"Books not found",status:false})
    }
})

router.post('/getBooklist',async (req,res)=>{
  const userWatchlist = []
    const {_id} = req.body
    // console.log(req.body._id)
    const user = await User.findById({ _id: mongoose.Types.ObjectId(_id) });
    // console.log(user)
    // console.log(user)
    const booklist = user.booklist
    let toggle = booklist.length
    let i = 0 
    // console.log(watchlist) 
    const newDaTa = await Promise.all(booklist.map(async e=>{
      const newArr = await getData(e.volumeId)
      // console.log(newArr)
      return newArr
      // userWatchlist.push(newArr) 
    }))
    console.log("booklist", newDaTa);

    // res.json({watchlist:newDaTa,status:true})
    
    if(user){
        res.json({booklist:newDaTa,status:true})
    } 
    else{
        res.json({message:"User not found",status:false})
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

router.post('/addToBooklist',async (req,res)=>{
    try {
        const { _id, volumeId} = req.body;
        // const id = mongoose.Types.ObjectId(_id)
        // console.log(req.body._id);
        // const movie = await axios.get(
        //   `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
        // );
        const book = await getData(volumeId)
        console.log("book",book)
        // console.log(book.data)
        // const date = new Date().toDateString();
        // console.log(date);
        const data = book.data.genres;
        // let genre = [];
        // data.map((e) => {
        //   genre.push({
        //     genreId: `${e.id}`,
        //   });
        // });
        // console.log(genre);
        const user = await User.findById(_id);
        let count = 0;

        console.log(user)

        user.booklist.map((e) => {
          if (e.volumeId == volumeId) {
            count++;
          }
        });
        if (count > 0) {
          return res
            .json({
              message: "Book is already added to Watchlist",
              status: false,
            });
        } else {
        //   await axios.post("http://localhost:3010/addToHistory", {
        //     userId: _id,
        //     movieId: movieId,
        //   });
          const newBook = {
            volumeId: `${volumeId}`,
            // genre: [],
            // date: date.toLocaleString(),
          };
        //   genre.map((e) => {
        //     newMovie.genre.push(e);
        //   });
          user.booklist.push(newBook);
          console.log(user);
          const updatedUser = await User.findByIdAndUpdate(_id, user)
            .then((e) => {
              return res.json({
                message: "Book added to Watchlist",
                status: true,
              });
            })
            .catch((e) => {
              return res.json({ message: "Server error", status: false });
            });
        }
    } catch (error) {
        console.log(error)
    }

})
 
router.post('/deleteFromBooklist',async (req,res)=>{ 

    const {_id,volumeId} = req.body
    const user = await User.findById(_id)
    for(let i=0;i<user.booklist.length;i++){
        if(user.booklist[i].volumeId == volumeId){
            user.booklist.splice(i,i+1)
        }
    }
    console.log(user)
    const updatedData = await User.findByIdAndUpdate(_id,user)
    res.json({message:"Book removed from Watchlist",status:true})
})

router.post('/deleteBooklist',async (req,res)=>{
    const {_id}  = req.body
    let user = await User.findById(_id)
   
    for(let i=0;i<=user.booklist.length;i++){
        if(user.booklist.length == 0){
            break;
        }
        else{
            user.booklist.splice(i,i+1)
            i--;
        }
    }
    await User.findByIdAndUpdate(_id,user)
    return res.json({message:"Booklist deleted",status:true})
})

router.get('/getBooklist',async (req,res)=>{
    const {_id} = req.body
    let data = []
    let user = await User.findById(_id)
    user.booklist.map(e=>{
        // if(e.isWatched == true){
            data.push(e)
        // }
    })
    return res.json({Books:data,status:true})

})

// router.post('/addToWatchedlist',async (req,res)=>{
//     const {_id,movieId} = req.body
//     let user = await User.findById(_id)
//     user.watchlist.map(e=>{
//         if(e.movieId == movieId){
//             e.isWatched = true
//             e.isWatching = false
//         }
//     })  
//     await User.findByIdAndUpdate(_id,user)
//     return res.json({message:"Successfully added to watched list",status:true})
// })

// router.get('/getWatchingList',async (req,res)=>{
//     const {_id}  = req.body
//     const user = await User.findById(_id)
//     let data = []
//     user.watchlist.map(e=>{
//         if(e.isWatching == true){
//             data.push(e)
//         }
//     })

//     return res.json({WatchingMovie:data,status:true})
// })

// router.post('/addToWatchinglist',async (req,res)=>{
//     const {_id,movieId} = req.body
//     let user = await User.findById(_id)
//     user.watchlist.map(e=>{
//         if(e.movieId == movieId){
//             e.isWatching = true
//             e.isWatched = false
//         }
//     })
//     await User.findByIdAndUpdate(_id, user);
//     return res.json({message:"Successfully added to Watching list",status:true})
    
// })



module.exports = router;
