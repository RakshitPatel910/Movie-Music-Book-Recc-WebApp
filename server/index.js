const dotenv = require('dotenv')
const { application } = require('express');

const express = require('express');
const app = express()

dotenv.config({path:'./config.env'})

require('./db/conn')
// const User = require('./model/userSchema')

app.use(express.json()) // to convert incoming data in express to json
app.use(require('./router/auth')) // we link router file to rout easy

const port = process.env.PORT;

// %40 = @  username = zakespy password= Exodus@123
 

 
app.listen(port,()=>{ 
    console.log('serve is running at port 3010')
})




