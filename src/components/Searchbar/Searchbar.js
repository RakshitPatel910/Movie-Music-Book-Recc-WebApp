import * as React from 'react';
import TextField from '@mui/material/TextField';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AnchorIcon from '@mui/icons-material/Anchor';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { Button } from '@mui/material';

const drawerWidth = 240;
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    
    
   
    <Box sx={{ display: 'flex' }}>
       
       
      <CssBaseline />
      
      <Grid container spacing={1} columns={10}>
      <Grid item xs={0.3}><Item></Item></Grid>
      
        <Grid item xs={0.4}>
          <Item>
          <IconButton         
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge='end'
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
          
        >
          <MenuIcon />
        </IconButton>
          </Item>
        </Grid>
        <Grid item xs={7}><Item></Item></Grid>
        
        <Grid item xs={2}>
          <Item >
        <TextField fullWidth label="Search" id="fullWidth" />
            </Item>
        </Grid>
      </Grid>
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{background: "#F5FF5C  "}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </DrawerHeader>
        
        <Divider />
        <List>
          <ListItemButton>
            <ListItem>
          <ListItemIcon>
          <AnchorIcon />
          </ListItemIcon>
            <ListItemText primary='ACTION' />
          </ListItem>          
          </ListItemButton>

          <ListItemButton>
            <ListItem>
          <ListItemIcon>
          <AcUnitIcon />
          </ListItemIcon>
            <ListItemText primary='THRILLER' />
          </ListItem>          
          </ListItemButton>

          <ListItemButton>
            <ListItem>
          <ListItemIcon>
          <FavoriteBorderIcon />
          </ListItemIcon>
            <ListItemText primary='ROMANCE' />
          </ListItem>          
          </ListItemButton>

          <ListItemButton>
            <ListItem>
          <ListItemIcon>
          <AccountTreeIcon />
          </ListItemIcon>
            <ListItemText primary='ADVENTURE' />
          </ListItem>          
          </ListItemButton>

          <ListItemButton>
            <ListItem>
          <ListItemIcon>
          <ColorLensIcon />
          </ListItemIcon>
            <ListItemText primary='DRAMA' />
          </ListItem>          
          </ListItemButton>

        </List>
       
      </Drawer>
    </Box>
  );
}
