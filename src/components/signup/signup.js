import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Signup(){
    return (
      <>
        <div className="signup">
          <div className="name">
            <TextField className="firstName" label="First Name" />
            <TextField className="middleName" label="Middle Name" />
            <TextField className="lastName" label="Last Name" />
          </div>
          <TextField className="email" label="Email" />
          <TextField
            className="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField className="password" label="Confirm Password" />
          <Button className="button" style={{backgroundColor:"black"}} variant="contained">Sign Up</Button>
        </div>
      </>
    );
}

export default Signup