import React from 'react';
import {useEffect} from 'react';
import jwt_decode from 'jwt-decode'
import './App.css';
// import Signup from './components/signup/signup.js';
// import Signin from './components/signin/signin.js'
function App() {
  const google = window.google
  function handleCallbackResponse(res){
    console.log("encoded JWT ID token"+ res.credential);
    var userObject = jwt_decode(res.credential); 
    console.log(userObject)
  }
  
  useEffect(()=>{
    // /* global google*/
    google.accounts.id.initialize({
      client_id:
        "472882567063-3budp9p8d63nn03uv9vsn3ihkpuau6ur.apps.googleusercontent.com",
        callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    )

  },[])

  return (
    <>
      {/* <Signup/> */}
      <div id="signInDiv"></div>
    </>
      
  );
}

export default App;
