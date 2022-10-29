const express = require('express')
const axios = require('axios') 
const mongoose = require('mongoose')
const router  = express.Router()

require("../db/conn");

const personalRecommendation = require('../algorithms/personalRecommendation');

const WatchCount = require('../model/watchSchema.js');

router.post('/createWatchCount', async (req, res) => {
    const { email } = req.body;

    try {
        const isExisting = await WatchCount.findOne({ email: email });

        if( isExisting ) return res.status(400).json({ message: "User already exists." });

        const result = await WatchCount.create({ email: email, stats: [] });

        return res.status(400).json({ message: "User watch count created", data: result });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})

router.post('/doesWatchListExist', async (req, res) => {
    const { email } = req.body;

    try {
        const isExisting = await WatchCount.findOne({ email: email });

        if( isExisting ) return res.status(200).json({ message: "User already exists.", doesExist: true });
        else return res.status(200).json({ message: "User does not exist.", doesExist: false });

        // const result = await WatchCount.create({ email: email, stats: [] });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

router.post('/getPerRecc', async (req, res) => {
    const { email } = req.body;

    const userData = await WatchCount.findOne({ email: email });
    try {
        const length = userData.stats.length;
    
        if( length !== 0 ){
            const recommendedGenre =   personalRecommendation(userData.stats);
    
            // res.status(200).json({ message: 'Calculated!!!', data:userData });
    
    
            console.log(recommendedGenre);
            
            return res.json({ message: "calculations done.", reccGenres: recommendedGenre, status: true });
        }
        else {
            return res.json({ message: 'no data for processing', status: false });
        }
    } catch (error) {
        // console.log(error);
        return res.json({message: "something went wrong", error: userData});
    }

});


function isInWatchCount(genre_id, stats) {
    return stats.findIndex((g) => g.genreId === genre_id);
}


router.patch('/updateWatchCount', async (req, res) => {
    const { email, genre_ids } = req.body;

    // if(!mongoose.Types.ObjectId.isValid(email)) return res.status(404).send('No user with that id');
    try {
        let userData = await WatchCount.findOne({ email: email });
        console.log(userData)
        await genre_ids.map(async (g_id) => {
            // userData.stats.g_id += 1;
            // let index = userData.stats.findIndex((g) => {g.genreId === g_id});

            let index = await isInWatchCount(g_id, userData.stats);
            // console.log(index)

            if( index !== -1 ) userData.stats[index].count += 1;
            
            if( index === -1 ) userData.stats.push({genreId: g_id, count: 1});
            console.log(g_id)
        })
    
        // setTimeout(async ()=>{const updatedData = await WatchCount.findOneAndUpdate({email: email}, userData);
        // res.json({ message: 'Count updated successfully' });
        // console.log(updatedData);},1000)


        const updatedData = await WatchCount.findOneAndUpdate({email: email}, userData);
        res.json({ message: 'Count updated successfully' });

        console.log(updatedData);
    } catch (error) {
        console.log(error)
    }
    
});

module.exports = router;  