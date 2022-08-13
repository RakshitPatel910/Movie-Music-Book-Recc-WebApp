import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import customCss from './style.js'
// import { makeStyles } from "@material-ui/core/styles";
// import { useState } from "react"
function Signup() {
  // const {isLogin,setIsLogin} = useState(false);
  const classes = customCss()
  return (
    <>
      <div className="signup-container">
        <TextField id="outlined-basic" label="Email" variant="outlined" /> 
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button className={classes.Button} variant="contained">Login</Button>
      </div>
    </>
  );
}

export default Signup;
