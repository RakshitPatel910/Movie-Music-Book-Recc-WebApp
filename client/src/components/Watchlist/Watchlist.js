import * as React from "react";
import {Stack,Button,Grid,Menu,MenuItem, Avatar, } from "@mui/material";
import { Box } from "@mui/system";
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import './Watchlist.css'



export default function Watchlist ()
 {

    return (

<>
<<<<<<< HEAD
    
      <>
                
       <Stack spacing={2} direction="row" marginTop={2.5}>
=======
      <>              
       <Stack spacing={3} direction="row">
>>>>>>> 2b348212f8db525c06888f5babf775775a205236
                      <Grid></Grid>
                      <Grid></Grid>                        <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            FILLTER
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>ACTION</MenuItem>
            <MenuItem onClick={popupState.close}>THRILLER</MenuItem>
            <MenuItem onClick={popupState.close}>COMEDY</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </Stack>
    </>

    <div class="card">
  <div class="card__inner">
    <header class="card__header">
    </header>
    
    <main class="card__body">
      
      <div class="card__info">
        <h1 class="card__title">Captain America: Civil War</h1>
    
        <p class="card__slug">Political interference in the Avengers' activities causes a rift between former allies Captain America and Iron Man.</p>
      
        <button class="card__btn" value="Watch trailer">Add to Cart</button>

       
      </div>
    </main>
    
    <footer class="card__footer">
      <ul class="list list--info">
        <li>2016</li>
        <li>122 min</li>
        <li>Action | Sci-Fi</li>
      </ul>
    </footer>
  </div>
</div>

    </>          

    );
}
