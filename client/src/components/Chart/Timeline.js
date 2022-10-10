import react from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import './timelineStyle.css'

const tl = [
  {
    date: "65Million B.C.",
    description: "65Million B.C.",
    property: "RAWWWWWWRRR 🐢🦂",
  },
  {
    date: "48Million B.C.",
    description: "Humans",
    property: "Hehe",
  },
  {
    date: "30Million B.C.",
    description: "Dogs",
    property: "Bhao bhao",
  },
];

function Timeline(){

    const [movieInfo,setMovieInfo] = useState([])

    // setMovieInfo([null])
    
    useEffect(()=>{
      async function getMovieInfo(id){
        await axios
          .post("http://localhost:3010/userHistory", {
            userId: JSON.stringify(id),
          })
          .then((e) => {
            console.log("e", e.data.history);
            setMovieInfo(e.data.history)
          });

        // setMovieInfo(info.history1)
      }

      getMovieInfo(23525344322423);

      console.log("movieinfo ",movieInfo)
    },[])

 
    
    

    return (
      <>
        <div id="timeline-content">
          <h1>Timeline</h1>
          <ul class="timeline">
            {movieInfo.map((e) => {
              return (
                <>
                  <li class="event" data-date={"some date"}>
                    <div class="arrow-right"></div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "20px",
                      }}
                    >
                      <h3>{e.name}</h3>
                      <p>{e.releaseDate}</p>
                    </div>
                  </li>
                </>
              );
            })}
            {/* <li class="event" data-date="65Million B.C.">
              <h3>65Million B.C.</h3>
              <p>RAWWWWWWRRR 🐢🦂</p>
            </li>
            <li class="event" data-date="2005">
              <h3>Creative Component Launched</h3>
              <p>"We can be all things to all people!" 📣</p>    
            </li>
            <li class="event" id="date" data-date="2009">
              <h3>Squareflair was Born</h3>
              <p></p> <p>"We can be all things to Squarespace users!" 📣</p>    
            </li>
            <li class="event" data-date="2021">
              <h3>Squareflair Today</h3> 
              <p>We design and build from scratch!</p>
            </li> */}
          </ul>
        </div>
      </>
    );
}   

export default Timeline;