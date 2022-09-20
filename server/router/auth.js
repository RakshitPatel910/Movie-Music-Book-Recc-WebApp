const express = require('express');
const router  = express.Router();

require('../db/conn')
const User = require("../model/userSchema")

router.get('/' , (req,res)=>{
    res.send('router auth js ')
})

router.post('/signup',(req,res)=>{

    const {name , email , phone , password} = req.body //object destructuring 

    if(!name || !email || !phone || !password){
        return res.status(422).json({error:"PLz fill all credentials"})
    }
 
    User.findOne({email:email}) //email(database email):email(user register email)
        .then((userExist)=>{
            if(userExist){ // checking if user already exist 
                 res.status(422).json({error:"Email already exist"})
            } 

            const user = new User({name,email,phone,password}) //creating new document

            user.save().then(()=>{ //saving the document in db
                res.status(201).json({message: "signup successfully"})
            })
            .catch((err)=> res.status(500).json({error:"Failed register"}))
  
 
        }) 
        // .catch(err=>{console.log(err)}) 

    console.log(name)  
    console.log(email)
    // res.send("post req send")
    // res.json({message:req.body.name})
})

module.exports = router; 