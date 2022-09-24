import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from './components/Appbar/Navbar/Navbar.js';
import Searchbar from './components/Appbar/Searchbar/Searchbar.js';
import { CheckBoxOutlineBlank } from '@material-ui/icons';

import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth';
import Movieinfo from './components/Movieinfo/Movieinfo.js';
import SearchResults from './components/SearchResults/SearchResults.js';
import Forgotpassword from './components/Auth/Forgotpassword.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Searchbar />
        <Forgotpassword />
        

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
 