import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import { useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";;
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";










 


function Navbar() {
               const navigate= useNavigate();
 
 
 
  const [open, setOpen] = useState(false);
     // Function to toggle sidebar
  const toggleDrawer = (state) => {
    setOpen(state);
  };

const handleNavigation = (path) => {
    navigate(path);  // Navigate to the page
    toggleDrawer(false);  // Close the sidebar
  };
 


  return (
    <AppBar position="sticky" sx={{background:"white", p:2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
           

        <Box component="img" src="https://demo.klayemorrison.com/jasper-hotel/system/images/logo.png" alt="Logo" sx={{ height: 30 }} />


 









       <>
      {/* Sidebar Toggle Button */}
      <IconButton onClick={()=>toggleDrawer(true)} sx={{ display:{md:"block", lg:"none", marginLeft:"auto" }  }}>
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="right" open={open} onClose={()=>toggleDrawer(false)}
      sx={{ display:{md:"block", lg:"none", marginLeft:"auto" }  }}
      >
        <Box sx={{ width: 250, p: 2 }}>
            <IconButton onClick={() => toggleDrawer(false)} sx={{ position: "absolute", top: 3, right: 1 }}>
            <CloseIcon />
          </IconButton>
          <List>
               <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation("/")}>
                <ListItemText primary="Home" sx={{py:3, 
                m:0, textAlign:"center", borderRadius:"10px",
                  border:"1px solid lightblue", width:"100%"
                }} />
              </ListItemButton>
            </ListItem>

             <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation("/accommodation")}>
                <ListItemText primary="Accommodation" sx={{py:3, 
                m:0, textAlign:"center", borderRadius:"10px",
                  border:"1px solid lightblue", width:"100%"
                }} />
              </ListItemButton>
            </ListItem>

           <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation("/templates")}>
                <ListItemText primary="Templates" sx={{py:3, 
                m:0, textAlign:"center", borderRadius:"10px",
                  border:"1px solid lightblue", width:"100%"
                }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation("/sections")}>
                <ListItemText primary="Sections" sx={{py:3, 
                m:0, textAlign:"center", borderRadius:"10px",
                  border:"1px solid lightblue", width:"100%"
                }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation("/mega-menu")}>
                <ListItemText primary="Mega Menu" sx={{py:3, 
                m:0, textAlign:"center", borderRadius:"10px",
                  border:"1px solid lightblue", width:"100%"
                }} />
              </ListItemButton>
            </ListItem>

          </List>
        </Box>
      </Drawer>
    </>





  
 







   <Box sx={{ flexGrow: 1, display: {  xs:'none', lg: "flex"     }, gap: "20px", marginLeft: "17%" , color:"black"}  }>
          <Button onClick={() => navigate("/")} sx={{ color: "black" }}>
            Home
          </Button>
          <Button onClick={() => navigate("/accommodation")} sx={{ color: "black" }}>
            Accommodation
          </Button>
          <Button onClick={() => navigate("/templates")} sx={{ color: "black" }}>
            Templates
          </Button>
          <Button onClick={() => navigate("/sections")} sx={{ color: "black" }}>
            Sections
          </Button>
          <Button onClick={() => navigate()} sx={{ color: "black" }}>
            Mega Menu
          </Button>
          <IconButton sx={{ color: "black" }}>
            <SearchIcon />
          </IconButton>
        </Box>




  



            <Button
             variant="contained"
                sx={{
                  display:{xs:"none", lg:"block"},
                  backgroundColor: "#ff4000",
                  transition: "padding-left 0.3s ease-in-out",
                  paddingX: "16px", 
                  "&:hover": {
                    paddingLeft: "24px",  
                 },
                }}
                    >
                 Book
                </Button>

          



        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;