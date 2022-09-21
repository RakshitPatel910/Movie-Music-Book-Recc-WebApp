const express = require('express')

const router  = express.Router()

require('../db/conn')
const User = require('../model/userSchema')

router.post('./addToWatchlist',(req,res)=>{
    const {_id,movieID} = req.body

    User.findById({_id:_id}).then((user) => res.status(200).json({message:"found the user"})).catch((err)=>console.log(err))
})

module.exports = router; 