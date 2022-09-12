import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from './components/signup/signup.js';
import Signin from './components/signin/signin.js';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home/Home.js';
import SearchResults from './components/SearchResults/SearchResults'; 
import Navbar from './components/Navbar/Navbar.js';
import Searchbar from './components/Searchbar/Searchbar.js';
import Blank from './components/blank/Blank.js';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Blank/>
      <Searchbar/>
        <Routes>
          <Route path="/" exact element={<Carousel/>} />
          <Route path="/searchresults" exact element={<SearchResults/>} />
          <Route path="/movieinfo" exact element={<Home/>} />
          <Route path="/signin" exact element={<Signin/>} />
          <Route path="/signup" exact element={<Signup/>} />
        </Routes> 
      {/* <Home/> */}
      {/* <Signup/>
      <Signin/> */}
      </BrowserRouter>

      {/* <Carousel /> */}
    </>
  )
} 
// afasfasfasdfsf9000
//hi here testing

export default App;
