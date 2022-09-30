import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Navbar from './components/Appbar/Navbar/Navbar.js';
import Searchbar from './components/Appbar/Searchbar/Searchbar.js';
import Forgpass from './components/Auth/Forgpass.js'
import Signinappbar from './components/Auth/Signinappbar.js'

import Appbar from './components/Appbar/Appbar.js';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home.js';
import Movieinfo from './components/Movieinfo/Movieinfo.js';
import SearchResults from './components/SearchResults/SearchResults.js';
import dotenv from 'dotenv'

dotenv.config({ path: "../config.env" });  

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  // const navigate = useNavigate();

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem('profile')));
  // }, [navigate])
  

  return (
    <> 
      <BrowserRouter>
        {/* <Navbar />
        <Searchbar /> */}
        <Appbar/>
        {/* <Forgpass /> */}
        {/* <Navbar /> */}
        {/* <Searchbar /> */}
        {/* <Appbar/> */}
        {/* <Forgpass /> */}
        {/* <Signinappbar /> */}
          <Routes>
            {/* <Route path="/" exact element={<Auth />} /> */}
            {/* <Route path="/home/*"  element={<Home />} /> */}
            { user ? <Route path="/*"  element={<Home />} /> : <Route path="/" exact element={<Auth />} /> }
            {/* <Route path="/home/:genre_name" exact element={<SearchResults />} />
            <Route path="/movieinfo" exact element={<Movieinfo />} /> */}
          </Routes> 
      </BrowserRouter>

    </>
  );
} 

export default App;
 