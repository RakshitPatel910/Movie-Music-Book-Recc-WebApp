import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard/MovieCard';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
// import { motion } from 'framer-motion'; 
// import InfiniteScroll from "react-infinite-scroll-component";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import useStyles from "./styles.js";

function Carousel() {

    const [movieList, setMovieList] = useState([]);
    const classes = useStyles();
    const carousel = useRef(0);
    const slider = useRef(null);
    const [translatePage, setTranslatePage] = useState(0);

    const fetchMovies = (page) => axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f20575175c2deae7974eb547727d1ace&language=en-US&page=${page}`);

    const getMovies = async () => {
        const movies1 = await fetchMovies(1);
        const movies2 = await fetchMovies(2);
        // const m3 = movies1.data.results.concat(movies2.data.results);
        setMovieList(movies1.data.results.concat(movies2.data.results));
        // setMovieList(movies2.data.results.slice(10).concat(movies1.data.results).concat(movies2.data.results.slice(0, 10)));
        // console.log(m3);
        // console.log(slider.current.scrollWidth);
        // console.log(slider.current.offsetWidth);
    }

    useEffect( () => { 
        getMovies();
    }, [])

    const onHandleClick = (num) => {
        // setTranslatePage(translatePage + num)

        if( (translatePage === 0 && num === 1) || ( translatePage === 1 || translatePage === 2 ) || (translatePage === 3 && num === -1 ) ) {
            setTranslatePage(translatePage + num);
            // if ( num === 1 ) {
            //     setTranslatePage(translatePage + num);
            //     setMovieList(movieList.concat(movieList.slice(0, 10)));
            // }
        }
        if ( (translatePage === 3 && num === 1) || (translatePage === 0 && num === -1) ) {
            setTranslatePage( translatePage - (3 * num));
        }
    }

    return (
        <>

            {/* <div className={classes.carouselTitle}>
                <Typography variant="h4" >
                    Popular Now
                    <ArrowForwardIosIcon 
                        style={{transition: '150ms ease-in-out', stroke: "#000000", strokeWidth: 1.5}}
                        className={classes.titleArrow} 
                        fontSize="small"
                    />
                </Typography>
            </div> */}

                <div ref={carousel} className={classes.container}>
                    <div className={classes.carouselTitle}>
                        <Typography className={classes.listName} variant="h4" >
                            Popular Now
                            <ArrowForwardIosIcon 
                                style={{transition: '150ms ease-in-out', stroke: "#000000", strokeWidth: 1.5}}
                                className={classes.titleArrow} 
                                fontSize="small"
                            />
                        </Typography>
                        <button className={classes.viewMore} variant="body2" >
                            view more
                        </button>
                    </div>

                    {!movieList.length ? <CircularProgress color="secondary" style={{margin: '3.3%'}} /> : (
                        <div className={classes.slider}>
                            <button className={`${classes.handle} ${classes.leftHandle}`} onClick={() => onHandleClick(-1)}>
                                <ArrowBackIosNewIcon 
                                    style={{transition: '150ms ease-in-out'}} 
                                    className={classes.leftHandleArrow} 
                                    />
                            </button>

                            <div ref={slider} id='slid' style={{ '--slider-index': translatePage }} className={classes.moviesList}>
                                {movieList.map((movie) => (
                                    <MovieCard list={movie} key={movie.id} />
                                    ))}
                            </div>

                            <button className={`${classes.handle} ${classes.rightHandle}`} onClick={() => onHandleClick(1)}>
                                <ArrowForwardIosIcon 
                                    style={{transition: '150ms ease-in-out'}}
                                    className={classes.rightHandleArrow} 
                                    />
                            </button>
                        </div>
                    )}

                </div>



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