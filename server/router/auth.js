const express = require('express');
const router  = express.Router();

require('../db/conn')
const User = require("../model/userSchema")

router.post('/signin',async (req,res)=>{
    const {email,password} = req.body

    const data = await User.find({email:email,password:password}).then(e=>{
        if(e.length == 0){
            return res
              .status(404)
              .json({ error: "User does not exist", status: false });
        }
        else{
           return res.json({ message: "Successfully Logged in", status: true }); 
        }
    })

})

router.post('/signup',(req,res)=>{

    const {name , email , phone , password } = req.body //object destructuring 

    if(!name || !email || !phone || !password){
        return res.status(422).json({error:"PLz fill all credentials"})
    }
 
    User.findOne({email:email}) //email(database email):email(user register email)
        .then((userExist)=>{
            if(userExist){ // checking if user already exist 
                res.status(422).json({error:"Email already exist",status:false})
            } 
            else{
                const user = new User({name,email,phone,password}) //creating new document
                 
                user.save().then(()=>{ //saving the document in db
                    res.status(201).json({message: "signup successfully",status:true})
                })
                .catch((err)=> res.status(500).json({error:"Failed register",status:false}))
            }
        }) 
        .catch(err=>{console.log(err)}) 
})

router.post('/forgetPassword',async (req,res)=>{
    const {email,newPassword} = req.body
    let user = await User.findOne({email:email})
    if(user.length == 0){
        return res.status(404).json({error:"User doesnt exist",status:false})
    }
    else{
        user.password = newPassword
        await User.findOneAndUpdate({email},user)
        return res.json({message:"Password Changed",status:true})
    }
})


module.exports = router;  