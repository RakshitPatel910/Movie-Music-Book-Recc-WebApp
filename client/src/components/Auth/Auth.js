import React, { useState, useEffect } from 'react';

import Signin from './Signin/Signin';
import Signup from './Signup/Signup';



const Auth = ({ setIsLogged }) => {

    const [isSignUp, setIsSignUp] = useState(0); 

    useEffect(()=>{console.log("isSignUp changing")},[isSignUp])

    return (
      <>
        {isSignUp ? (
          <Signup  setIsSignUp={setIsSignUp} />
        ) : (
          <Signin  setIsSignUp={setIsSignUp} setIsLogged={setIsLogged} />
        )}
        {/* <Signup />
        <Signin /> */}
      </>
    );
}

export default Auth