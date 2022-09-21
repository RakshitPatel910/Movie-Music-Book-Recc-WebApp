const express = require('express')

const router1  = express.Router()

require('../db/conn')
const User = require("../model/userSchema");

router1.patch('./addtowatchlist', async (req,res)=>{
    const {_id,movieId} = req.body
    const data  = await User.findById({_id:_id})
    let user  = new User({...data}) 
    console.log(user)   
})

router1.post('./getWatchlist', async (req,res)=>{
    const{_id} =  req.body
    const data = await User.findById(_id)
    console.log(data)
})

module.exports = router1; 