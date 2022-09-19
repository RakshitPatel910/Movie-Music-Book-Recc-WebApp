const { application } = require('express');
const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello world hui')
})

app.listen(3010,()=>{
    console.log('serve is running at port 3010')
})


