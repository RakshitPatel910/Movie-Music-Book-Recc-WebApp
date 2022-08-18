import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from "./styles.js";

function MovieCard({ list }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={`https://image.tmdb.org/t/p/w185${list.poster_path}`} title={list.original_title} />
            <div className={classes.overlay2}>
                <Button 
                    style={{color: 'white'}} 
                    size="small" 
                    onClick={() => {}}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <Typography className={classes.title} variant="body2" gutterBottom >{list.original_title}</Typography>
        </Card>
        
    )
}

export default MovieCard