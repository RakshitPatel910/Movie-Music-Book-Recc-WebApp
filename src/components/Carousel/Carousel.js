import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard/MovieCard';
import { Grid, CircularProgress } from '@material-ui/core';
import { motion } from 'framer-motion'; 
import InfiniteScroll from "react-infinite-scroll-component";

import useStyles from "./styles.js";

function Carousel() {

    const [movieList, setMovieList] = useState([]);
    const [popularPage, setPopularPage] = useState(1);
    const classes = useStyles();
    const carousel = useRef(0);
    const slider = useRef(0);

    const fetchMovies = (page) => axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f20575175c2deae7974eb547727d1ace&language=en-US&page=${page}`);

    const getMovies = async () => {
        const movies = await fetchMovies(1);
        console.log(movies.data.results);
        await setMovieList(movies.data.results);
        // console.log(slider.current.scrollWidth);
        // console.log(slider.current.offsetWidth);
    }

    useEffect( () => { 
        getMovies();
        // console.log(carousel.current.scrollWidth)
    }, [])

    // const settings ={
    //     lazyload: true,
    //     speed: 300,
    //     slidesToShow: 2,
    // }

    const fetchMoreData = async () => {
        setPopularPage(popularPage+1);
        // console.log(movieList);
        // console.log(popularPage)
        const movies2 = await fetchMovies(2);
        console.log(movies2.data.results)
        const m2 = movieList.concat(movies2.data.results);
        setMovieList(m2);
        // console.log(m2)
    }

    return (
        <>


        <InfiniteScroll
          dataLength={movieList.length}
          next={fetchMoreData}
          hasMore={movieList.length !== 40}
          loader={<CircularProgress color="secondary"/>}
          style={{overflow:'hidden'}}
        >
            {!movieList.length ? <CircularProgress color="secondary" /> : (
                <motion.div ref={carousel} className={classes.container}>
                    <motion.div ref={slider} id="slider"
                        drag="x" 
                        dragConstraints={{ right: 0, left: -1247 }}
                        className={classes.slider}
                    >
                        {movieList.map((movie) => (
                            <MovieCard list={movie} key={movie.id} />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </InfiniteScroll>



            <h2>2nd Slider</h2>
            {!movieList.length ? <CircularProgress color="secondary" /> : (
                <motion.div ref={carousel} className={classes.container}>
                    <motion.div ref={slider} id="slider"
                        drag="x" 
                        dragConstraints={{ right: 0, left: -1247 }}
                        className={classes.slider}
                    >
                        {movieList.map((movie) => (
                            <MovieCard list={movie} key={movie.id} />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

export default Carousel