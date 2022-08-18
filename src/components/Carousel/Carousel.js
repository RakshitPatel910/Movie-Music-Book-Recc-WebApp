import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard/MovieCard';
import { Grid, CircularProgress } from '@material-ui/core';
import { motion } from 'framer-motion'; 


import useStyles from "./styles.js";

function Carousel() {

    const [movieList, setMovieList] = useState([]);
    const classes = useStyles();

    // const movieList = [{
    //     poster: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    //     title: "Minions: The Rise of Gru"
    // },
    // {
    //     poster: "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
    //     title: "Prey"
    // },
    // {
    //     poster: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    //     title: "Minions: The Rise of Gru"
    // },
    // {
    //     poster: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    //     title: "Thor: Love and Thunder"
    // }]

    const fetchMovies = () => axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f20575175c2deae7974eb547727d1ace&language=en-US&page=1');

    const getMovies = async () => {
        const movies = await fetchMovies();
        console.log(movies.data.results);
        setMovieList(movies.data.results);
    }

    useEffect( () => { 
        getMovies();
    }, [])

    const settings ={
        lazyload: true,
        speed: 300,
        slidesToShow: 2,
        
    }

    return (
      !movieList.length ? <CircularProgress color="secondary" /> : (
        <motion.div className={classes.container}>
            <motion.div drag="x" className={classes.slider}>
                {movieList.map((movie) => (
                    <MovieCard list={movie} key={movie.id} />
                    ))}
            </motion.div>
        </motion.div>
    )
    )
}

export default Carousel