const { application } = require('express');
const mongoose = require('mongoose')
const express = require('express');
const app = express()

const DB =
  'mongodb+srv://zakespy:Exodus%40123@cluster0.yc04396.mongodb.net/moviecon?retryWrites=true&w=majority';
// %40 = @  

mongoose.connect(DB 
    // , {
    // useNewUrlParser: true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
// }
).then(()=>{
    console.log("Connection is successsful")
}).catch((err)=> console.log(err))

app.get('/',(req,res)=>{
    res.send('Hello world hui')
})

app.listen(3010,()=>{ 
    console.log('serve is running at port 3010')
})




