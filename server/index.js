const dotenv = require('dotenv')
const { application } = require('express');
const cors = require('cors')
const express = require('express');
const app = express()

dotenv.config({path:'./config.env'}) 

require('./db/conn')
// const User = require('./model/userSchema')

app.use(express.json()) // to convert incoming data in express to json
app.use(cors())

app.use(require('./router/auth')); // we link router file to rout easy
app.use(require('./router/watchlist'))
app.use(require('./router/user'))
app.use(require('./router/stats'))
app.use(require('./router/recommendation'))

// app.all('*',function(req,res,next){
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "X-Requested-With,content-type,Authorization ,Accept"
//     );
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     res.setHeader("Access-Control-Expose-Headers", "Authorization");
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "X-Requested-With,content-type, Authorization"
//     );

//     next();
// })
const port = process.env.PORT;

// %40 = @  username = zakespy password= Exodus@123
 

 
app.listen(port,()=>{ 
    console.log('serve is running at port 3010')
})




