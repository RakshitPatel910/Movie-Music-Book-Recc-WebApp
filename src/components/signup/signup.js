import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import './style.css'

function Signup(){

  const [passwordShown,setPasswordShown] = useState(false);

  const togglePassword=()=>{
    setPasswordShown(!passwordShown)
    console.log(passwordShown)
  };
  

    return (
      <>
        <div className="signup">
          <div className="name" >
            <TextField className="firstName" label="First Name" />
            <TextField className="middleName"  label="Middle Name" style={{margin:"auto 1.5vh"}} />
            <TextField className="lastName" label="Last Name" />
          </div> 
          <TextField className="email" label="Email" style={{marginTop:"0vh",marginBottom:"2vh"}}/>
          <TextField
            className="password"
            label="Password"
            type={passwordShown ? "text" : "password"}
            autoComplete="current-password"
            style={{marginBottom:"2vh"}}
          />
          <IconButton onClick={togglePassword} style={{color:"black"}} >{passwordShown ? <VisibilityOffIcon/> : <VisibilityIcon/> }</IconButton>
          <TextField className="password" label="Confirm Password" style={{marginBottom:"2vh"}}/>
          <Button className="button" style={{backgroundColor:"black",marginBottom:"2vh"}} variant="contained" >Sign Up</Button> 
          <Button className="googleButton" style={{backgroundColor:"black"}} variant="contained">Signin with google</Button>
        </div>
      </> 
    );
}  
 
export default Signup