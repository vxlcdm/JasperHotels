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
 











const pages = ["Home", "Accommodation", "Templates", "Sections", "Mega Menu"];


function Navbar() {
               const navigate= useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 

 


  return (
    <AppBar position="static" sx={{background:"white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
           

        <Box component="img" src="https://demo.klayemorrison.com/jasper-hotel/system/images/logo.png" alt="Logo" sx={{ height: 25 }} />






        <Box sx={{ width:"100%", flexGrow: 1, display: { xs: 'flex', md: 'flex', lg:"none", border:""} ,marginLeft:"auto" , justifyContent:"end"}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:"black"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',

                
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',

              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' },
              

            }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}  sx={{      }} >
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>









   <Box sx={{ flexGrow: 1, display: {  xs:'none', lg: "flex"     }, gap: "20px", marginLeft: "15%" , color:"black"}  }>
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