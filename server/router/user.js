const express = require('express')
const router = express.Router()

require("../db/conn");
const User = require("../model/userSchema");

router.post('/userData',async (req,res)=>{
    const {_id} = req.body
    const user = await User.findById(_id)
    if(user === null){
        return res.json({message:"User Doesnt exists",status:false})
    }
    else if(user === ""){
        return res.json({message:"User doesnt exist",status:false})
    }
    else{   
        return res.json({data:user,status:true})
    }
})

router.post('/changeProfilePhoto',async(req,res)=>{
    const {_id,profilePhoto} = req.body
    const user = await User.findById(_id)
    if(user === null){
        return res.json({message:"USer doesnt exist",status:false})
    }
    else{
        user.profilePhoto = profilePhoto
        await User.findByIdAndUpdate({_id},user)
        return res.json({message:"Profile photo changed succesfully",status:true})
    }

})

module.exports = router;

