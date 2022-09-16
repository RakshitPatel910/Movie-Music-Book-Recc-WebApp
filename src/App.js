import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

<<<<<<< HEAD
import Signup from './components/Signup/Signup.js';
import Signin from './components/Signin/Signin.js';
=======
import Navbar from './components/Appbar/Navbar/Navbar.js';
import Searchbar from './components/Appbar/Searchbar/Searchbar.js';
import { CheckBoxOutlineBlank } from '@material-ui/icons';
import Signup from './components/signup/signup.js';
import Signin from './components/signin/signin.js';
>>>>>>> e16340ae482c0a96502f7b3847482397c1e0e419
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home/Home.js';
import SearchResults from './components/SearchResults/SearchResults'; 



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Searchbar />
        {/* <Routes>
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
  );
} 
// afasfasfasdfsf9000
//hi here testing

export default App;
 