const express = require('express');
const bcrypt = require('bcrypt');
const router  = express.Router();

require('../db/conn')
const User = require("../model/userSchema")
const saltRound = parseInt(process.env.SALTROUND); 
const salt = bcrypt.genSaltSync(saltRound);

async function encryption(data){
    return bcrypt.hash(data, salt);
} 




router.post('/signin',async (req,res)=>{
    
    const {email,password} = req.body
    
    const data = await User.findOne({email:email}).then(e=>{
        console.log(e)
        if(e == null){
            return res.json({ message: "User does not exist", status: false });
        }
        else if(e.length == 0 ){
            return res
              .json({ message: "User does not exist", status: false });
        } 
        else{
            if (bcrypt.compareSync(password, e.password)) {
                console.log("user exists");
                return res.json({
                    message: "Successfully Logged in",
                    status: true,
                }); 
            }
            else{
              return res.json({message:"Password is incorrect",status:false})
            }
        } 
    })

  
    

})

router.post("/signup", async (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
  const { userName , email, password } = req.body; //object destructuring
  const newPassword = await encryption(password)
//   if (!userName || !email || !password) {
//     return res.status(400).json({ message: "PLz fill all credentials" ,status:false});
//   }



 await User.findOne({ email: email }) //email(database email):email(user register email)
    .then(async (userExist) => {
      if (userExist) {
        // checking if user already exist
        return res.json({ message: "Email already exist", status: false });
      } else {
        const user = new User({ userName, email, password:newPassword }); //creating new document

        await user
          .save()
          .then(() => {
            //saving the document in db
            return res
              .status(201)
              .json({ message: "signup successfully", status: true });
          })
          .catch((err) =>
             res.status(500).json({ message: "Failed register", status: false })
          );
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

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