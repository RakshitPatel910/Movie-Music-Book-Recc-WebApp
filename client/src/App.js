import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from './components/Appbar/Navbar/Navbar.js';
import Searchbar from './components/Appbar/Searchbar/Searchbar.js';
import Forgpass from './components/Auth/Forgpass.js'
import Signinappbar from './components/Appbar/Signinappbar.js'

import Appbar from './components/Appbar/Appbar.js';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home.js';
// import Movieinfo from './components/Movieinfo/Movieinfo.js';
// import SearchResults from './components/SearchResults/SearchResults.js';
import dotenv from 'dotenv'

dotenv.config({ path: "../config.env" });  

function App() {
  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Searchbar />
        {/* <Appbar/> */}
        {/* <Forgpass /> */}
        {/* <Signinappbar /> */}
          <Routes>
            {/* <Route path="/" exact element={<Auth />} />

            <Route path="/home/*"  element={<Home />} /> */}
            {/* <Route path="/home/:genre_name" exact element={<SearchResults />} /> */}
            {/* <Route path="/movieinfo" exact element={<Movieinfo />} /> */}
          </Routes> 
      </BrowserRouter>

    </>
  );
} 

export default App;
 