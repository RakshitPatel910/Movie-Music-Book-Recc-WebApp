import React from 'react';

import { Chip, Typography } from '@material-ui/core';
import { moviesGenre } from '../../../constants/genreId.js';
import useStyles from "./styles.js";

function SearchedMovieCard({ list }) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.mediaContainer}>
                <img className={classes.media} src={`https://image.tmdb.org/t/p/w185${list.poster_path}`} alt="" />
            </div>
            <div className={classes.info}>
                <Typography className={classes.title} gutterBottom>{list.title}</Typography>

                <div className={classes.genreList}>
                    {list.genre_ids.map((genres) => (
                        moviesGenre.map((genreList) => (
                            genres===genreList.id ?
                            <Typography className={classes.genreChip} variant='caption' gutterBottom>
                                {genreList.name}
                            </Typography> : ''
                        ))
                    ))}
                </div>

                <Chip className={classes.ratingChip}>
                    chip
                </Chip>
            </div>
        </div>
    )
}

export default SearchedMovieCard