import react from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
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
          <h1 className="timlineHeading">Timeline</h1>
          <ul class="timeline">
            {movieInfo.map((e) => {
              return (
                <>
                  <li className="event" data-date={moment(e.date).format("D MMMM yyyy")}>
                    <div className="arrow-right"></div>
                    <div 
                      className='timelineCard'
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "20px",
                        marginTop: "-11px",
                      }}
                    >
                      <div className="timelineInfo">
                        <div className="timelineName">
                          <h3>{e.name}</h3> 
                          <p className="paraghraph">{e.releaseDate}</p>
                        </div>
                        <img src={e.poster} alt={e.name} width="100" height="100" className="movieImg"></img>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
}   

export default Timeline;