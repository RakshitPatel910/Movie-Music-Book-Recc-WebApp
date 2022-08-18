import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import {useEffect,useState} from 'react';
import jwt_decode from 'jwt-decode'
// import customCss from './style.js'
import './style.css'

// import { makeStyles } from "@material-ui/core/styles";
// import { useState } from "react"



function Signin() {

  

  const [profile,setProfile] = useState({
    email: "",
    password:""
  })
  

  
  const [user,setUser] = useState({});
  const [passwordShown,setPasswordShown] = useState(false); 

  const google = window.google

  const togglePassword=()=>{
    setPasswordShown(!passwordShown);
  }

  function handleCallbackResponse(res){
    console.log("encoded JWT ID token"+ res.credential);
    var userObject = jwt_decode(res.credential); 
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true //// hide button after login in
  }
  
  function handleSingOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false
  }

  useEffect(()=>{
    // /* global google*/
    google.accounts.id.initialize({
      client_id:
        "472882567063-bt4odj909cbaiim0t4k94p725o4ptugk.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
 
    google.accounts.id.renderButton( //render sign in button
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    )

    google.accounts.id.prompt();  //automatically display accounts to login

  },[])


  // const {isLogin,setIsLogin} = useState(false);
  // const classes = customCss()
  return (
    <>
      <div className="signup-container">
        <TextField className="email"  label="Email" value={profile.email} onChange={(e)=>{setProfile({...profile,email:e.target.value})}} /> 
        <TextField className="password"
          label="Password"
          type={passwordShown ? "text":"password"}
          autoComplete="current-password"
          value={profile.password}
          onChange={(e)=>{setProfile({...profile,password:e.target.value})}} //...profile initailly will set old value of field and then change the changing field
        />
        <IconButton onClick={togglePassword} style={{color:"black"}}>{passwordShown ? <VisibilityOffIcon/> : <VisibilityIcon/>}</IconButton>
        <Button className="button" style={{backgroundColor:"black"}} variant="contained" onClick={()=>{console.log(profile.email,profile.password)}}>Login</Button>
      </div> 
      {
        Object.keys(user).length !==0 ? <button onClick={(e)=> handleSingOut(e)}>Sign out</button> : console.log() //sign out button show when user logge in or else not
      }
    
      <div id="signInDiv"></div>
    </>
  );
}

export default Signin;

