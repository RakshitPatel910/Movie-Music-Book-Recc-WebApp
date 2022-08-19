import React from "react";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
// import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
// import {useEffect,useState} from 'react';
// import jwt_decode from 'jwt-decode'
import "./style.css";

function Signup() {
  // const google = window.google;

  // const [profile, setProfile] = useState({
  //   email:"",
  //   password:"",
  //   firstName:"",
  //   middleName:"",
  //   lastName:"",
  // });

  // const [confirmPassword,setConfirmPassword] = useState("");
  // var passwordChecking ;

  // const [passwordShown,setPasswordShown] = useState(false);
  // const [user, setUSer] = useState({});

  // const togglePassword=()=>{
  //   setPasswordShown(!passwordShown)
  //   console.log(passwordShown)
  // };

  // function checkPassword(){
  //   if(confirmPassword !== profile.password){
  //     console.log(profile.email,profile.password,confirmPassword)
  //     passwordChecking = true
  //   }
  // }

  // function handleCallbackResponse(res) {
  //   console.log("encoded JWT ID token" + res.credential);
  //   var userObject = jwt_decode(res.credential);
  //   console.log(userObject);
  //   setUSer(userObject);
  //   document.getElementById("signInDiv").hidden = true; //// hide button after login in
  // }

  // function handleSingOut(event) {
  //   setUSer({});
  //   document.getElementById("signInDiv").hidden = false;
  // }

  // useEffect(() => {
  //   // /* global google*/
  //   google.accounts.id.initialize({
  //     client_id:
  //       "472882567063-bt4odj909cbaiim0t4k94p725o4ptugk.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });

  //   google.accounts.id.renderButton(
  //     //render sign in button
  //     document.getElementById("signInDiv"),
  //     { theme: "outline", size: "large" }
  //   );

  //   google.accounts.id.prompt(); //automatically display accounts to login
  // }, []);

  return (
    <>
      <Container >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "purple" }}>
            {" "}
            {/* m is margin equal on all side */}
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Signup;
