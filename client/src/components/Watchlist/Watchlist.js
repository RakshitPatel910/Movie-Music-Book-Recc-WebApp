import * as React from "react";
import {useState,useEffect} from "react"
import { Stack, Button, Grid, Menu, MenuItem, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import axios from 'axios'
import "./Watchlist.css";

export default function Watchlist() {

  let m = []
  const data = []
  const [list,setList] = useState([]) 
  const [movie,setMovie] = useState([])
  const [toggle,setToggle] = useState(false)

  useEffect(()=>{
    async function getWatchlist(){
      // const user = JSON.parse(localStorage.getItem("profile"));
      console.log(JSON.parse(localStorage.getItem("profile")).profile.id);
      const id = JSON.parse(localStorage.getItem("profile")).profile.id;
      
      // const Id = user.profile.id.trim();
      // console.log(Id)
      const person = async () =>
        await axios
          .post("http://localhost:3010/getWatchlist", {
            _id: id
          })
          .then((e) => {
            console.log(e.data.data)
            // console.log(e.data.watchlist);
          })
          .catch((e) => {
            console.log(e);
          });
        person()
        
        
      // console.log("user ",person) 
    }

    getWatchlist()

    
  },[])

async function getMovie(movieId) {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f20575175c2deae7974eb547727d1ace&language=en-US`
    )
    .then((e) => {
      // m.push(e.data);
      setMovie([...movie, e.data]);
    });
  // console.log(m);
}

function fetchMovie() {
  list.map((e) => {
    getMovie(e.movieId);
    return e.movieId;
  });
  console.log(data, "data");
}

// useEffect(()=>{
//   fetchMovie();
// },[toggle])
  
  
  return (
    <>
      <Stack spacing={2} direction="row" marginTop={2.5}>
        <Grid></Grid>
        <Grid></Grid>{" "}
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button variant="contained" {...bindTrigger(popupState)}>
                FILLTER
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>ACTION</MenuItem>
                <MenuItem onClick={popupState.close}>THRILLER</MenuItem>
                <MenuItem onClick={popupState.close}>COMEDY</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </Stack>
       
      {console.log(movie)}
      {fetchMovie()}
      {
        movie.map(e=>{
            return (
              <>
                <div className="card">
                  <div className="card__inner">
                    <header className="card__header"></header>

                    <main className="card__body">
                      <div className="card__info">
                        <h1 className="card__title">{e.title}</h1>

                        <p className="card__slug">
                          Political interference in the Avengers' activities
                          causes a rift between former allies Captain America
                          and Iron Man.
                        </p>
                      </div>
                    </main>

                    <footer className="card__footer">
                      <ul className="list list--info">
                        <li>2016</li>
                        <li>122 min</li>
                        <li>Action | Sci-Fi</li>
                      </ul>
                    </footer>
                  </div>
                </div>
              </>
            );
        })
      }
     
    </>
  );
}
