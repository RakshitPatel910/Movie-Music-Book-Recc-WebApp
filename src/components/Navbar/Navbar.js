import * as React from 'react';
import { Avatar,Button} from '@mui/material' ; 
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import ContactlessIcon from '@mui/icons-material/Contactless';
//import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
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
      <AppBar sx={{background: "#FFC71A"}} position="ixfed" open={open}>
        <Toolbar>
        <IconButton size='large' color='inherit'>
                    <ContactlessIcon />

                    </IconButton>
                    <Typography component={Link} to='/' variant='h4'  sx={{flexGrow:1,textDecoration:"none",color:"white"}}>
                        Movicon
                    </Typography>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >


                    
                    <Avatar ><FlashOnOutlinedIcon /></Avatar>
                      
                    
                        <Button  color ='inherit'><Typography variant='h5'>USERNAME</Typography></Button>

          </IconButton>
          
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader  sx={{background: "#F5FF5C  "}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Button>


        <Avatar ><SentimentSatisfiedAltIcon /></Avatar>
        </Button>
        
                      
                    
                        <Button  color ='inherit'><Typography variant='h5'>USERNAME</Typography></Button>
                        <Divider />


        <List>
          {['MY ACCOUNT', 'SIGN OUT', 'APP INFO'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <AssessmentRoundedIcon /> : <ExitToAppOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
    </Box>
  );
}
