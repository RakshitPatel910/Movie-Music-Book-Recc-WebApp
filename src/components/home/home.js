import React from "react";
import axios from "axios";

const key = "f20575175c2deae7974eb547727d1ace";

export default function Home(){

    var photo ="";
    const fetchImage = 
      axios.get(
        `https://api.themoviedb.org/3/movie/550/images?api_key=${key}&language=en-US&include_image_language=en%2Cnull`
      ).then((res)=>console.log(res))


      const image = ()=>{
        fetchImage.then((a)=>{
            return
        })
      }

    

    return(
        <>
            <div>
                
                {
                   photo =  image()
                }    
                
                
                
            </div>
        </>
    )

}