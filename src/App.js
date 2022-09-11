import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from './components/Signup/Signup.js';
import Signin from './components/Signin/Signin.js';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home/Home.js';
import SearchResults from './components/SearchResults/SearchResults'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Carousel/>} />
          <Route path="/searchresults" exact element={<SearchResults/>} />
        </Routes>
      </BrowserRouter>
      {/* <Signup/>
      <Signin/> */}

      {/* <Home/> */}
      {/* <Carousel /> */}
    </>
  )
} 
// afasfasfasdfsf9000
//hi here testing

export default App;
