import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Carousel from "../Carousel/Carousel.js";
import Movieinfo from '../Movieinfo/Movieinfo.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Timeline from "../Chart/Timeline.js";

import { moviesGenre } from '../../constants/genreId.js';

export default function Home(){

    const genreList = moviesGenre.sort( () => 0.5 -Math.random() ).slice(0, 2);

    return(
        <>
            <Routes>
                <Route path="" exact element={
                    <>
                        <Carousel title={'Popular Now'}/>
                        {
                            genreList.map((genreObj) => (
                                <Carousel genre={genreObj.id} title={genreObj.name}/>
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
