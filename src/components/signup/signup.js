import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {useEffect,useState} from 'react';
import jwt_decode from 'jwt-decode'
import './style.css'

function Signup(){

  const google = window.google;
  
  const [profile, setProfile] = useState({
    email:"",
    password:"",
    firstName:"",
    middleName:"",
    lastName:"",
  });

  const [confirmPassword,setConfirmPassword] = useState("");
  var passwordChecking ;
  

  const [passwordShown,setPasswordShown] = useState(false);
  const [user, setUSer] = useState({});

  const togglePassword=()=>{
    setPasswordShown(!passwordShown)
    console.log(passwordShown)
  };

  function checkPassword(){
    if(confirmPassword !== profile.password){
      console.log(profile.email,profile.password,confirmPassword)
      passwordChecking = true
    }
  }
  
  function handleCallbackResponse(res) {
    console.log("encoded JWT ID token" + res.credential);
    var userObject = jwt_decode(res.credential);
    console.log(userObject);
    setUSer(userObject);
    document.getElementById("signInDiv").hidden = true; //// hide button after login in
  }

  function handleSingOut(event) {
    setUSer({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    // /* global google*/
    google.accounts.id.initialize({
      client_id:
        "472882567063-bt4odj909cbaiim0t4k94p725o4ptugk.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      //render sign in button
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt(); //automatically display accounts to login
  }, []);

  

    return (
      <>
        <div className="signup">
          <div className="name" >
            <TextField className="firstName" label="First Name" value={profile.firstName} onChange={(e)=>{setProfile({...profile,firstName:e.target.value})}}/>
            <TextField className="middleName"  label="Middle Name" style={{margin:"auto 1.5vh"}} value={profile.middleName} onChange={(e)=>{setProfile({...profile,middleName:e.target.value})}} />
            <TextField className="lastName" label="Last Name" value={profile.lastName} onChange={(e)=>{setProfile({...profile,lastName:e.target.value})}}/>
          </div> 
          <TextField className="email" label="Email" style={{marginTop:"0vh",marginBottom:"2vh"}} value={profile.email} onChange={(e)=>{setProfile({...profile,email:e.target.value})}}/>
          <TextField
            className="password"
            label="Password"
            type={passwordShown ? "text" : "password"}
            autoComplete="current-password"
            style={{marginBottom:"2vh"}}
            value={profile.password}
            onChange={(e)=>{setProfile({...profile,password:e.target.value})}}
          />
          <IconButton onClick={togglePassword} style={{color:"black"}} >{passwordShown ? <VisibilityOffIcon/> : <VisibilityIcon/> }</IconButton>
          
          <TextField className="password" label="Confirm Password" style={{marginBottom:"2vh"}} value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value);}} />
          {
            passwordChecking ? 
              <h6 style={{color:"red",left:"0px"}}>Password should be same</h6> : ""
          }
          <Button className="button" style={{backgroundColor:"black",marginBottom:"2vh"}} variant="contained" onClick={()=>{checkPassword()}} >Sign Up</Button> 
          { 
            Object.keys(user).length !==0 ? <button onClick={(e)=> handleSingOut(e)}>Sign out</button> : console.log() //sign out button show when user logge in or else not
          }
          <div id="signInDiv"></div>
        </div>
      </> 
    );
}  
 
export default Signup