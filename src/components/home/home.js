import * as React from "react";
import axios from "axios";
import { useState,useEffect} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab"; 
import Typography from "@mui/material/Typography";

import './style.css'


const key = "f20575175c2deae7974eb547727d1ace";
// const id = 550
const id = 278;
// const id = 244786;
// const path = `https://image.tmdb.org/t/p/w185${list.poster_path}`


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}



function Home(){

    
    const [value, setValue] = React.useState(0);
    const [image,setImage] = useState("");
    const [overview,setOverview] = useState("");
    const [genre,setGenre] = useState([]);
    const [title,setTitle] = useState("");
    const [runTime,SetRunTime] = useState("")
    const [releaseDate,setReleaseDate] = useState("")
    // const [review,setReview] = useState([])
  

    const theme = useTheme();
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index) => {
      setValue(index);
    };


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

            display: "flex",
            flexDirection: "column",
            padding: "10px 50px",
          }}
        >
          <div class="movie_card" id="bright">
            <div class="info_section">
              <div class="movie_header">
                <img class="locandina" alt="movieImage" src={image} />
                <h1>{title}</h1>
                <h4>{releaseDate.slice(0, 4)}, David Ayer</h4>
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
                    <i class="material-icons">
                      <AddIcon sx={{ height: "60px" }} />
                    </i>
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

          <div className="info">
            <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  // indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "violet",
                    },
                  }}
                >
                  <Tab label="Info"  {...a11yProps(0)} />
                  <Tab label="Cast" {...a11yProps(1)} />
                  <Tab label="reviews" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
                sx={{height:"100%"}}
              >
                <TabPanel value={value} index={0} dir={theme.direction} >
                  Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  Item Three
                </TabPanel>
              </SwipeableViews>
            </Box>
          </div>
        </Container>
      </>
    );

}

export default Home;