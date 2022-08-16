import React from 'react';
import {useEffect,useState} from 'react';
import jwt_decode from 'jwt-decode'
import './App.css';
// import Signup from './components/signup/signup.js';
// import Signin from './components/signin/signin.js'
function App() {

  const [user,setUSer] = useState({});

  const google = window.google

  function handleCallbackResponse(res){
    console.log("encoded JWT ID token"+ res.credential);
    var userObject = jwt_decode(res.credential); 
    console.log(userObject);
    setUSer(userObject);
    document.getElementById("signInDiv").hidden = true //// hide button after login in
  }
  
  function handleSingOut(event){
    setUSer({});
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

  return (
    <>
      {/* <Signup/> */}{
        Object.keys(user).length !==0 ? <button onClick={(e)=> handleSingOut(e)}>Sign out</button> : console.log() //sign out button show when user logge in or else not
      }
    
      <div id="signInDiv"></div>
    </>
      
  );
}

export default App;
