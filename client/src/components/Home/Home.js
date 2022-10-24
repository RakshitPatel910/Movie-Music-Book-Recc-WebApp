import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import Carousel from "../Carousel/Carousel.js";
import Movieinfo from '../Movieinfo/Movieinfo.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Timeline from "../Chart/Timeline.js";

import { getReccGenre } from "../../api/backend.js";

import { moviesGenre } from '../../constants/genreId.js';

export default function Home(){

    const [reccGenres, setReccGenres] = useState([]);
    const [reccMovies, setReccMovies] = useState([]);

    const genreList = moviesGenre.sort( () => 0.5 -Math.random() ).slice(0, 2);

    const fetchMovies = (page) => axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f20575175c2deae7974eb547727d1ace&language=en-US&page=${page}&with_genres=`);

    

    useEffect( () => {
        const getReccGenreCall = async () => {
            
            const data = await getReccGenre(JSON.parse(localStorage.getItem('profile')).profile.email);
            setReccGenres(data);
    
            console.log(reccGenres);
        }

        //  getReccGenreCall();

        // console.log(localStorage.getItem('profile').email)
        // console.log('inside useEffect')
    }, [])
    

    return(
        <>
            <Routes>
                <Route path="" exact element={
                    <>
                        <Carousel title={'Popular Now'}/>
                        {
                            genreList.map((genreObj) => (
                                <Carousel genre={genreObj.id} title={genreObj.name} key={genreObj.id}/>
                                ))
                            }
                    </>} 
                />
                <Route path=":genre_name-:genreId" exact element={<SearchResults />} />
                <Route path=":genre_name-:genreId/:movie_id" exact element={<Movieinfo />} />
                <Route path=":movie_id" exact element={<Movieinfo />} />
                <Route path="timeline" exact element={<Timeline />} />
                <Route path="timeline/:movie_id" exact element={<Movieinfo />} />
            </Routes>
        </>
    )
}
