import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Carousel from "../Carousel/Carousel.js";
import Movieinfo from '../Movieinfo/Movieinfo.js';
import SearchResults from '../SearchResults/SearchResults.js';

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
                <Route path=":genre_name" exact element={<SearchResults />} >
                    
                <Route path=":genre_name/movieinfo" exact element={<Movieinfo />} />
                </Route>
                <Route path="movieinfo" exact element={<Movieinfo />} />
            </Routes>
        </>
    )
}
