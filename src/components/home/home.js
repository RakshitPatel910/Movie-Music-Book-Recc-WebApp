import * as React from "react";
import axios from "axios";
import { useState,useEffect} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import './style.css'


const key = "f20575175c2deae7974eb547727d1ace";
const id = 550
// const path = `https://image.tmdb.org/t/p/w185${list.poster_path}`
function Home(){

    
    const [image,setImage] = useState("");
    // const [overview,setOverview] = useState("");
    // const [genre,setGenre] = useState([]);
    // const [title,setTitle] = useState("");
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
            // setOverview(result.data.overview);
            // setGenre(result.data.genres);
            // setTitle(result.data.title)
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
          <Box
            className="movieInfo"
            sx={{
              margin: "10px 0px",
              height: "65vh",
              width: "40%",
            }}
          >
            <img
              src={image}
              alt=""
              className="poster"
            />
          </Box>
          <Box
            className="movieInfo"
            sx={{
              margin: "10px 0px",
              height: "65vh",
              width: "60%",
            }}
          >
            {/* <img src={image} alt="" className="poster" style={{}} /> */}
          </Box>
        </Container>
      </>
    );

}

export default Home;