const express = require('express')
const axios = require('axios') 
const mongoose = require('mongoose')
const router  = express.Router()

require("../db/conn");

const personalRecommendation = require('../algorithms/personalRecommendation');

const WatchCount = require('../model/watchSchema.js');

router.post('/createWatchCount', async (req, res) => {
    const { userId } = req.body;

    try {
        const isExisting = await WatchCount.findOne({ userId: userId });

        if( isExisting ) return res.status(400).json({ message: "User already exists." });

        const result = await WatchCount.create({ userId: userId, stats: [] });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})

router.get('/getPerRecc', async (req, res) => {
    const { userId } = req.body;

    const userData = await WatchCount.findOne({ userId: userId });

    const recommendedGenre =  personalRecommendation(userData.stats);

    res.status(200).json({ message: 'Calculated!!!' });

    console.log(recommendedGenre);
});


function isInWatchCount(genre_id, stats) {
    return stats.findIndex((g) => g.genreId === genre_id);
}


router.patch('/updateWatchCount', async (req, res) => {
    const { userId, genre_ids } = req.body;

    if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send('No user with that id');

    let userData = await WatchCount.findOne({ userId: userId });

    await genre_ids.map(async (g_id) => {
        // userData.stats.g_id += 1;
        // let index = userData.stats.findIndex((g) => {g.genreId === g_id});

        let index = await isInWatchCount(g_id, userData.stats);
        // console.log(index)

        if( index !== -1 ) userData.stats[index].count += 1;
        
        if( index === -1 ) userData.stats.push({genreId: g_id, count: 1});
        console.log(g_id)
    })
    
    // setTimeout(async ()=>{const updatedData = await WatchCount.findOneAndUpdate({userId: userId}, userData);
    // res.json({ message: 'Count updated successfully' });
    // console.log(updatedData);},1000)

    
    const updatedData = await WatchCount.findOneAndUpdate({userId: userId}, userData);
    res.json({ message: 'Count updated successfully' });

    console.log(updatedData);
});

module.exports = router;  