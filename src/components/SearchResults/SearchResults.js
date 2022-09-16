import React, { useState, useEffect } from 'react'
import { Grid, Typography, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import SearchedMovieCard from './SearchedMovieCard/SearchedMovieCard';
import useStyles from "./styles.js";

function SearchResults() {
    const classes = useStyles();
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResult] = useState(0)

    const fetchMovies = (page) => axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f20575175c2deae7974eb547727d1ace&language=en-US&page=${page}`);

    const getMovies = async () => {
      const movies = await fetchMovies(page);
      setMovieList(movies.data.results);
      setTotalResult(totalResults + 20);
    }

    const getMoreMovies = async () => {
      const moreMovies = await fetchMovies(page + 1);
      setPage(page + 1);
      setTimeout(async () => {
        setMovieList(movieList.concat(moreMovies.data.results));
        setTotalResult(totalResults + 20);
      }, 500);
    }

    useEffect( () => { 
      getMovies();
    }, [])

    return (
      <>
        {/* <div className="">Popular Now</div> */}

        {!movieList.length ? <CircularProgress color="secondary" style={{margin: '3.3%'}} /> : (
            <InfiniteScroll
              dataLength={movieList.length} //This is important field to render the next data
              next={getMoreMovies}
              hasMore={true}
              loader={<CircularProgress color="secondary" style={{margin: '3.3%'}} />}
              scrollThreshold={0.99}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
                <Grid className={classes.container} container alignItems='stretch' spacing={3} >
                    <Grid item xs={12}>
                        <Typography variant='h3'>Popular Now</Typography>
                    </Grid>
                    {movieList.map((movie) => (
                      <Grid className={classes.items} item xs={4}>
                            <SearchedMovieCard list={movie} key={movie.id} />
                        </Grid>
                    ))}
                </Grid>              
            </InfiniteScroll>
        )}

      </>
    )
}

export default SearchResults