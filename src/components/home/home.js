import * as React from "react";
import axios from "axios";
import { useState,useEffect} from "react";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";

import './style.css'


const key = "f20575175c2deae7974eb547727d1ace";
const id = 550
// const id = 278;
// const id = 244786;
// const path = `https://image.tmdb.org/t/p/w185${list.poster_path}`
function Home(){

    
    const [image,setImage] = useState("");
    const [overview,setOverview] = useState("");
    const [genre,setGenre] = useState([]);
    const [title,setTitle] = useState("");
    const [runTime,SetRunTime] = useState("")
    const [releaseDate,setReleaseDate] = useState("")
    // const [review,setReview] = useState([])
  
    


    const fetchMovie = () =>
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      );

    // const fetchReview = () =>
    //   axios.get(
    //     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
    //   );




      useEffect(()=>{
        let isMounted =  true;
        
        async function getMovie(){
          const result = await fetchMovie()
          if(isMounted){
            const path = result.data.poster_path;
            setImage(`https://image.tmdb.org/t/p/w185${path}`);
            setOverview(result.data.overview);
            setGenre(result.data.genres);
            setTitle(result.data.title)
            SetRunTime(result.data.runtime);
            setReleaseDate(result.data.release_date);
          }
        }

        // async function getReview(){
        //   const result = await fetchReview()
        //   if(isMounted){
        //     setReview(result.data.results);
        //   }
        // }

        getMovie();
        // getReview()
        return()=>{
          isMounted = false;
        };
      },[])
      


    return (
      <>
        <Container
          maxWidth=""
          sx={{
            height: "fit-content",
            bgcolor: "red",
            display: "flex",
            flexDirection: "row",
            padding: "10px 50px",
          }}
        >
          <div class="movie_card" id="bright">
            <div class="info_section">
              <div class="movie_header">
                <img class="locandina" alt="movieImage" src={image} />
                <h1>{title}</h1>
                <h4>{releaseDate.slice(0,4)}, David Ayer</h4>
                <span class="minutes">{runTime} min</span>
                <p class="type">
                  {genre.map((e) => (
                    <>{`${e.name} `}</>
                  ))}
                </p>
              </div>
              <div class="movie_desc">
                <p class="text">{overview}</p>
              </div>
              <div class="movie_social">
                <ul>
                  <li>
                    <i class="material-icons"><AddIcon sx={{height:"60px"}}/></i>
                  </li>
                  <li>
                    <i class="material-icons"></i>
                  </li>
                  <li>
                    <i class="material-icons">chat_bubble</i>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="blur_back bright_back"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </Container>
      </>
    );

}

export default Home;