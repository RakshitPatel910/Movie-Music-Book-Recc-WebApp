const express = require('express')
const axios = require('axios') 
const router  = express.Router()

require("../db/conn");
const Insight = require("../model/insightSchema");

const key = process.env.key;

router.get('/getTotalHistory',async (req,res)=>{
    const {userId} = req.body
    const data = await Insight.findOne({userId:userId})
    console.log(data)
})

router.post("/addToHistory", async (req, res) => {
  let count=0;
  const { userId, movieId } = req.body;
  const data = await Insight.findOne({ userId: userId });
  console.log("outside function");
  console.log(data);
  if (data === null) {
    console.log("Inside function"); 
    const history = [
      {
        movieId: movieId,
        histDate: [
          {
            date: new Date().toDateString(),
          },
        ], 
      },
    ];
    const user = new Insight({ userId, history });
    await user
      .save()
      .then(console.log("succesfully save"))
      .catch((e) => {
        console.log(e);
      });
    return res.json({ message: "Added to history", status: true });
  } else {
    data.history.map(async (e) => {
      if (e.movieId === movieId) {
        const newDate = { 
          date: new Date().toDateString(),
        };
        count = 1
        e.histDate.push(newDate);
        console.log("inside map func")
        await Insight.findOneAndUpdate({ userId: userId }, data);
        return res.json({ message: "Added to history", status: true });
      }
       else { 
        count += 2
      }
    });
  }
  
  if(count > 1 || count == 0){
    const history = {
    movieId: movieId,
    histDate: [
      {
        date: new Date().toDateString(),
      },
    ],
    };
    data.history.push(history);
    await Insight.findOneAndUpdate({ userId: userId }, data);
    return res.json({
      message: "Succesfully added to history",
      status: true,
    });
  }


  console.log(count)
});

router.get('/historyData',async (req,res)=>{
  const {userId} = req.body
  const data = [
    {"id":28,"name":"Action", count: 0},
    {"id":16,"name":"Animation", count: 0},
    {"id":35,"name":"Comedy", count: 0},
    {"id":80,"name":"Crime", count: 0},
    {"id":99,"name":"Documentary", count: 0},
    {"id":18,"name":"Drama", count: 0},
    {"id":10751,"name":"Family", count: 0},
    {"id":14,"name":"Fantasy", count: 0},
    {"id":36,"name":"History", count: 0},
    {"id":27,"name":"Horror", count: 0},
    {"id":10402,"name":"Music", count: 0},
    {"id":9648,"name":"Mystery", count: 0},
    {"id":10749,"name":"Romance", count: 0},
    {"id":878,"name":"Science Fiction", count: 0},
    {"id":10770,"name":"TV Movie", count: 0},
    {"id":53,"name":"Thriller", count: 0},
    {"id":10752,"name":"War", count: 0},
    {"id":37,"name":"Western", count: 0},
    {"id":12,"name":"Adventure", count: 0},
  ]

  const user  = await Insight.findOne({userId:userId})
  if(user === null){
    return res.json({message:"User does not exit",status:false})
  }
  else{
    const genre = [] 
    
    user.history.map(async (e)=>{
      const id = e.movieId
       await axios
         .get(
           `https://api.themoviedb.org/3/movie/550?api_key=${key}&language=en-US`
         )
         .then((e) => {
           console.log(e.data.genres, "success");
           e.data.genres.map(e=>{
            data.map(data=>{
              if(data.id == e.id){
                const value = data.count
                console.log(data.id ,"==",e.id)
                data.count = value + 1 //start from here
                console.log(data.count)
              } 
            })
           })
          //  genre.push(e.data);
         })
         .catch((err) => {
           console.log(err, "error");
         });
      //  console.log(genre);
    }) 
    
    return res.json({data:data})
  }

})

module.exports = router
