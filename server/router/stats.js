const express = require('express')
const router  = express.Router()

require("../db/conn");
const Insight = require("../model/insightSchema");

router.get('/getTotalHistory',async (req,res)=>{
    const {userId} = req.body
    const data = await Insight.findOne({userId:userId})
    console.log(data)
})

router.post('/addNewUser',async (req,res)=>{
    const {userId,movieId} = req.body
    const data = await Insight.findOne({userId:userId})
    console.log("outside function");
    console.log(data)
    if(data === null){
        console.log("Inside function")
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
        const user = new Insight({ userId,history});
        await user.save().then(console.log("succesfully save")).catch(e=>{console.log(e)})
        return res.json({message:"Added to history",status:true})
    }
    else{
        data.history.map(async e=>{
            if(e.movieId === movieId){
                const newDate = {
                    date: new Date().toDateString()
                } 
                e.histDate.push(newDate)
                await Insight.findOneAndUpdate({userId:userId},data)
                return res.json({message:"Added to history",status:true})
            }
            else{
                
            }
        })
    }
})

module.exports = router