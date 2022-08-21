import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard/MovieCard';
import { Grid, CircularProgress } from '@material-ui/core';
// import { motion } from 'framer-motion'; 
// import InfiniteScroll from "react-infinite-scroll-component";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import useStyles from "./styles.js";

function Carousel() {

    const [movieList, setMovieList] = useState([]);
    const classes = useStyles(1);
    const carousel = useRef(0);
    const slider = useRef(null);
    const [translatePage, setTranslatePage] = useState(0);

    const fetchMovies = (page) => axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f20575175c2deae7974eb547727d1ace&language=en-US&page=${page}`);

    const getMovies = async () => {
        const movies1 = await fetchMovies(1);
        const movies2 = await fetchMovies(2);
        // const m3 = movies1.data.results.concat(movies2.data.results);
        setMovieList(movies1.data.results.concat(movies2.data.results))
        // console.log(m3);
        // console.log(slider.current.scrollWidth);
        // console.log(slider.current.offsetWidth);
    }

    useEffect( () => { 
        getMovies();
    }, [])

    const onHandleClick = (num) => {
        setTranslatePage(translatePage + num)
    }

    return (
        <>

            {!movieList.length ? <CircularProgress color="secondary" /> : (
                <div ref={carousel} className={classes.container}>
                    
                    <button className={`${classes.handle} ${classes.leftHandle}`} onClick={() => onHandleClick(1)}>
                        <ArrowBackIosNewIcon 
                            style={{transition: '150ms ease-in-out'}} 
                            className={classes.leftHandleArrow} 
                        />
                    </button>

                    <div ref={slider} id='slid' style={{ '--slider-index': translatePage }} className={classes.slider}>
                        {movieList.map((movie) => (
                            <MovieCard list={movie} key={movie.id} />
                        ))}
                    </div>

                    <button className={`${classes.handle} ${classes.rightHandle}`} onClick={() => onHandleClick(-1)}>
                        <ArrowForwardIosIcon 
                            style={{transition: '150ms ease-in-out'}}
                            className={classes.rightHandleArrow} 
                        />
                    </button>

                </div>
            )}



            <h2>2nd Slider</h2>
            {/* {!movieList.length ? <CircularProgress color="secondary" /> : (
                <div ref={carousel} className={classes.container}>
                    <div ref={slider} id="slider"
                        drag="x" 
                        dragConstraints={{ right: 0, left: -1247 }}
                        className={classes.slider}
                    >
                        {movieList.map((movie) => (
                            <MovieCard list={movie} key={movie.id} />
                        ))}
                    </div>
                </div>
            )} */}
        </>
    )
}

export default Carousel