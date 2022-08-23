import React from "react";
import axios from "axios";
import { useState,useRef,useEffect} from "react";
const key = "f20575175c2deae7974eb547727d1ace";
// const path = `https://image.tmdb.org/t/p/w185${list.poster_path}`
export default function Home(){

    // let isRendered = useRef(false);
    const [image,setImage] = useState("");
  
    // useEffect(() => {
    //   isRendered = true;
    //   axios.get(
    //     `https://api.themoviedb.org/3/movie/550?api_key=${key}&language=en-US`
    //   ).then(res=>{
    //     if(isRendered){
    //       setImage(res.data.backdrop_path)
    //       console.log(image+"image")
    //     }
    //     return null;
    //   })
    //   // .catch(err=>console.log(err));
    //   return ()=>{
    //     isRendered = false;
    //   }
    // }, []);


    const fetchImage = () =>
      axios.get(
        `https://api.themoviedb.org/3/movie/550?api_key=${key}&language=en-US`
      ).then((res)=>{
        console.log(res)
        console.log(res.data.backdrop_path)
        setImage(res)
        console.log(image+"image")
      });

      // const getImage = async ()=>{
      //   const image1 = await fetchImage();
      //   console.log(image1.data.backdrop_path);
      //   setImage(image1.data.backdrop_path);
      //   console.log(image+"image")
      // } 



      // const image = ()=>{
      //   fetchImage.then((a)=>{
      //       return
      //   })
      // }



    

    return(
        <>
            <div>
                
                {
                  // fetchImage()
                }    
                
                
                
            </div>
        </>
    )

}