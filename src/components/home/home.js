import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
// import CardActions from "@mui/material/CardActions";
import ImageIcon from "@mui/icons-material/Image";
import Avatar from "@mui/material/Avatar";
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
 
import "./style.css";

const key = "f20575175c2deae7974eb547727d1ace";
const id = 550;
// const id = 278;
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

function Home() {

  const [value, setValue] = React.useState(0);
  const [image, setImage] = useState("");
  const [overview, setOverview] = useState("");
  const [genre, setGenre] = useState([]);
  const [title, setTitle] = useState("");
  const [runTime, SetRunTime] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [review, setReview] = useState([]);
  const [video, setVideo] = useState();
  const [info, setInfo] = useState([]);
  const [lang, setLang] = useState([]);
  const [company,setCompany] = useState([])
  const [country,setCountry] = useState([])
  // const [avatar,setAvatar] = useState("");

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

  const fetchReview = () =>
    axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
    );

  const fetchVideo = () =>
    axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
    );

  useEffect(() => {
    let isMounted = true;

    async function getMovie() {
      const result = await fetchMovie();
      if (isMounted) {
        const path = result.data.poster_path;
        setImage(`https://image.tmdb.org/t/p/w185${path}`);
        setOverview(result.data.overview);
        setGenre(result.data.genres);
        setTitle(result.data.title);
        SetRunTime(result.data.runtime);
        setReleaseDate(result.data.release_date);
        setInfo(result.data);
        setLang(result.data.spoken_languages);
        setCompany(result.data.production_companies);
        setCountry(result.data.production_countries);
      }
    }

    async function getReview() {
      const result = await fetchReview();
      if (isMounted) {
        setReview(result.data.results);
      }
    }

    async function getVideo() {
      const result = await fetchVideo();
      if (isMounted) {
        console.log(result.data.results[0].key);
        setVideo(result.data.results[0].key);
      }
    }

    getMovie();
    getReview();
    getVideo();
    return () => {
      isMounted = false;
    };
  }, []);

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
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" alt="movieImage" src={image} />
              <h1>{title}</h1>
              <h4>{releaseDate.slice(0, 4)}, David Ayer</h4>
              <span className="minutes">{runTime} min</span>
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
                {/* <li>
                            <i class="material-icons"></i>
                        </li> */}
                {/* <li>
                            <i class="material-icons">chat_bubble</i>
                        </li> */}
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
          <Box
            sx={{
              // bgcolor: "background.paper",
              bgcolor: "#0d0d0c",
              width: "100%",
              overflow: "auto",
            }}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange} // indicatorColor="secondary" textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "violet",
                  },
                }}
              >
                <Tab label="Info" {...a11yProps(0)} />
                <Tab label="Trailer" {...a11yProps(1)} />
                <Tab label="Reviews" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
              sx={{ height: "100%" }}
            >
              <TabPanel
                value={value}
                index={0}
                dir={theme.direction}
                style={{
                  backgroundImage:
                    "linear-gradient(to right , #000c19, #001823 , #000c19)",
                  color: "#cfd6e1",
                }}
              >
                <div className="overall_info">
                  <h1 style={{ color: "#cfd6e1" }}>{title}</h1>
                  <hr className="customHR"></hr>
                  <p>
                    Budget{" "}
                    {
                      <>
                        <h4>{info.budget}</h4>
                      </>
                    }
                  </p>
                  <p>
                    Revenue{" "}
                    {
                      <>
                        <h4>{info.revenue}</h4>
                      </>
                    }
                  </p>
                  <p>
                    Language{" "}
                    {lang.map((e) => (
                      <>
                        <h4>{e.english_name}</h4>
                      </>
                    ))}
                  </p>
                  <p>
                    Tagline{" "}
                    {
                      <>
                        <h4>{info.tagline}</h4>
                      </>
                    }
                  </p>
                  <p>
                    status{" "}
                    {
                      <>
                        <h4>{info.status}</h4>
                      </>
                    }
                  </p>
                  <hr className="customHR"></hr>
                  {/* {console.log(company)} */}
                  <h3>Production company</h3>
                  {company.map((e) =>
                    // console.log(e.logo_path + "logo")
                    e.logo_path == null ? (
                      <>
                        <p style={{ display: "flex", flexDirection: "row" }}>
                          <ImageIcon sx={{ width: "50px", height: "50px" }} />
                          <p
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h4>{e.name}</h4>

                            <h4 style={{ color: "#009dff" }}>
                              {e.origin_country}
                            </h4>
                          </p>
                        </p>
                      </>
                    ) : (
                      <>
                        <p style={{ display: "flex", flexDirection: "row" }}>
                          <img
                            src={`https://image.tmdb.org/t/p/w185${e.logo_path}`}
                            alt=""
                            srcset=""
                            style={{ backgroundColor: "white" }}
                          />
                          <p
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <h4>{e.name}</h4>

                            <h4 style={{ color: "#009dff" }}>
                              {e.origin_country}
                            </h4>
                          </p>
                        </p>
                      </>
                    )
                  )}
                  <hr className="customHR"></hr>
                  <h3>Production Countries</h3>
                  <p>
                    {country.map((e) => (
                      <Chip
                        className="chip"
                        label={e.name}
                        color="primary"
                        sx={{ margin: "5px" }}
                      />
                    ))}
                  </p>
                  <hr className="customHR"></hr>
                  <a
                    href={info.homepage}
                    style={{ textDecoration: "none", color: "#8cd3ff" }}
                    target="_blank"
                  >
                    More of Us
                  </a>
                </div>
              </TabPanel>
              <TabPanel
                value={value}
                index={1}
                dir={theme.direction}
                style={{
                  backgroundImage:
                    "linear-gradient(to right , #000c19, #001823 , #000c19)",
                  color: "#cfd6e1",
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video}`}
                  title="React.js Project to Embed Youtube Video in IFrame inside Browser Without any Library in Javascript"
                  height="600"
                  width="1000"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </TabPanel>
              <TabPanel
                value={value}
                index={2}
                dir={theme.direction}
                style={{
                  backgroundImage:
                    "linear-gradient(to right , #000c19, #001823 , #000c19)",
                  color: "#cfd6e1",
                }}
              >
                {review.map((e) => {
                  var str = `${e.author_details.avatar_path}`;
                  // setAvatar(`https://image.tmdb.org/t/p/w185${str}`);
                  return (
                    <>
                      <Card className="revCard" sx={{ margin: "10px" }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              src={`https://image.tmdb.org/t/p/w185${str}`}
                            ></Avatar>
                          }
                          title={e.author_details.username}
                          subheader={e.author_details.name}
                        />
                        <CardContent>
                          <Typography>{e.content}</Typography>
                        </CardContent>
                      </Card>
                    </>
                  );
                })}
              </TabPanel>
            </SwipeableViews>
          </Box>
        </div>
      </Container>
    </>
  );
}

export default Home
