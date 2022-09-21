import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from './components/Appbar/Navbar/Navbar.js';
import Searchbar from './components/Appbar/Searchbar/Searchbar.js';
import { CheckBoxOutlineBlank } from '@material-ui/icons';

import Home from './components/Home/Home.js'





function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <Searchbar /> */}
          <Routes>
            <Route path="/home" exact element={<Home/>} />
            
           
          </Routes> 
      </BrowserRouter>

    </>
  );
} 
// afasfasfasdfsf9000
//hi here testing

export default App;
 