import * as React from "react";
import {useState,useEffect} from "react"
import { Stack, Button, Grid, Menu, MenuItem, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import axios from 'axios'
import "./Watchlist.css";

export default function Watchlist() {

  let m = []
  const [list,setList] = useState([]) 
  const [movie,setMovie] = useState([])

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
            setList(e.data.watchlist);
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

  async function getMovie(movieId){
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=f20575175c2deae7974eb547727d1ace&language=en-US`
      )
      .then((e) => {
        m.push(e.data);
      });
    console.log(m);
  }

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
      {
        list.map(async e=>{
          getMovie(e.movieId)
          // setMovie(m.data)
        return (
          <>
            <div class="card">
              <div class="card__inner">
                <header class="card__header"></header>

                <main class="card__body">
                  <div class="card__info">
                    <h1 class="card__title">title</h1>

                    <p class="card__slug">
                      Political interference in the Avengers' activities causes
                      a rift between former allies Captain America and Iron Man.
                    </p>
                  </div>
                </main>

                <footer class="card__footer">
                  <ul class="list list--info">
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
    )
}
