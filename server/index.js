const dotenv = require('dotenv')
const { application } = require('express');

const express = require('express');
const app = express()

dotenv.config({path:'./config.env'})

require('./db/conn')
const User = require('./model/userSchema')

const port = process.env.PORT;
// %40 = @  username = zakespy password= Exodus@123



app.get('/',(req,res)=>{ 
    res.send('Hello world hui')
})
 
app.listen(port,()=>{ 
    console.log('serve is running at port 3010')
})




