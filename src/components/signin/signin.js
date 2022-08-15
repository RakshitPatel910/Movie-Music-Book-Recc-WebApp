import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import customCss from './style.js'
import './style.css'

// import { makeStyles } from "@material-ui/core/styles";
// import { useState } from "react"


function Signin() {
  // const {isLogin,setIsLogin} = useState(false);
  // const classes = customCss()
  return (
    <>
      <div className="signup-container">
        <TextField className="email"  label="Email"  /> 
        <TextField className="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button className="button" style={{backgroundColor:"black"}} variant="contained">Login</Button>
      </div>
    </>
  );
}

export default Signin;
