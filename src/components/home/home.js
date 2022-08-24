import React from "react";
import axios from "axios";
import { useState,useEffect} from "react";
const key = "f20575175c2deae7974eb547727d1ace";
const id = 550
// const path = `https://image.tmdb.org/t/p/w185${list.poster_path}`
export default function Home(){

    
    const [image,setImage] = useState("");
    const [overview,setOverview] = useState("");
    const [genre,setGenre] = useState([]);
    const [title,setTitle] = useState("");
    const [review,setReview] = useState([])
  
    


    const fetchMovie = () =>
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      );

    const fetchReview = () =>
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
      );

      // const getImage = async ()=>{
      //   const image1 = await fetchImage();
      //   console.log(image1.data.backdrop_path);
      //   setImage(image1.data.backdrop_path);
      //   console.log(image+"image")
      // } 

      // useEffect(()=>{
      //   const image2  = getImage();
      //   console.log(image2)
      // },[])


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
          }
        }

        async function getReview(){
          const result = await fetchReview()
          if(isMounted){
            setReview(result.data.results);
          }
        }

        getMovie();
        getReview()
        return()=>{
          isMounted = false;
        };
      },[])
      



     

    return (
      <>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h1>Title</h1>
          {title}
        </div>
        <div>
          <h1>Overview</h1>
          {overview}
        </div>
        <div>
          <h1>genre</h1>
          {genre.map((g) => (
            <div>{g.name}</div>
          ))}
        </div>
        <div>
          <h1>Review</h1>
          {
            review.map(r=>(
              <>
                
                <h3>{r.author}</h3>
                <div>{r.content}</div>
              </>
            ))
          }
        </div>
      </>
    );

}