const express = require('express')
const axios = require('axios') 
const router  = express.Router()

require("../db/conn");
const WatchCount = require('../model/watchSchema.js');

router.get('/getPerRecc', async (req, res) => {
    const { userId } = req.body;

    const userData = await WatchCount.findOne({ userId: userId });

    

    console.log(data);
});

router.post('/updateWatchCount', async (req, res) => {
    const { userId, genre_ids } = req.body;

    if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send('No post with that id');

    // const updatedCount = await WatchCount.findOneAndUpdate({ userId: userId }, genre_ids.map( (genre) => { { stats.genre } =  } ) )

    let userData = new WatchCount.findOne({ userId: userId });

    genre_ids.map((genre) => {
        userData.stats.genre += 1;
    })
    
    const updatedData = await WatchCount.findOneAndUpdate({userId: userId}, userData);
    
    console.log(updatedData);
});

