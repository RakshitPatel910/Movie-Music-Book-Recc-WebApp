import React, { useState, useEffect } from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Navbar from './components/Appbar/Navbar/Navbar.js';
import Searchbar from './components/Appbar/Searchbar/Searchbar.js';
import Forgpass from './components/Auth/Forgpass.js';
import Signinappbar from './components/Appbar/Signinappbar.js';

import Appbar from './components/Appbar/Appbar.js';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home.js';
import Movieinfo from './components/Movieinfo/Movieinfo.js';
import SearchResults from './components/SearchResults/SearchResults.js';
// import Radar from './components/Chart/Radar'
import Timeline from "./components/Chart/Timeline";
import dotenv from 'dotenv'

dotenv.config({ path: "../config.env" });  


function App() {

  // const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [isLogged, setIsLogged] = useState(user===null ? false:true);


  useEffect(() => {
    console.log(isLogged);
    setUser(JSON.parse(localStorage.getItem('profile')));
    console.log(user);
  }, [isLogged])
  

  return (
    <>
      <BrowserRouter>
        {/* <Navbar />
        <Searchbar /> */}
        <Appbar setIsLogged={setIsLogged} />
        {/* <Forgpass />     */}
        {/* <Signinappbar /> */}
        {/* <Home /> */}
        {/* <Timeline /> */}
          <Routes>
            {/* <Route path="/" exact element={<Auth />} /> */}

            {/* <Route path="/home/*"  element={<Home />} />
            <Route path="/home/:genre_name" exact element={<SearchResults />} /> */}

          {/* <Route path="/movieinfo" exact element={<Movieinfo />} /> */}

          {/* <Route path="/" exact element={<Auth />} />
            <Route path="/home/*"  element={<Home />} /> */}

            { user ? <Route path="/*"  element={<Home />} /> : <Route path="/" exact element={<Auth setIsLogged = {setIsLogged} />} /> }

            {/* <Route path="/home/:genre_name" exact element={<SearchResults />} /> */}
            {/* <Route path="/movieinfo" exact element={<Movieinfo />} /> */}
            {/* <Route path=":movie_id" exact element={<Movieinfo />} /> */}
          </Routes> 
      </BrowserRouter>
          {/* <Radar/> */}
          {/* <Timeline/> */}
          
    </>     
  );
} 


export default App;
 

