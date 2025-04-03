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











const pages = ["Home", "Accommodation", "Templates", "Sections", "Mega Menu"];


function Navbar() {
               const navigate= useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 
  const handleMenuOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menuName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };


  return (
    <AppBar position="static">
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
              <MenuIcon />
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




          


           <Box sx={{ flexGrow: 1, display: "flex", gap: "20px", marginLeft: "15%" }}>
          {/* Home */}
          <Box>
            <Button
              onClick={() => navigate("/home")}
              onMouseEnter={(e) => handleMenuOpen(e, "home")}
              sx={{ color: "white" }}
            >
              Home
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={openMenu === "home"}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseEnter: () => setOpenMenu("home"),
                onMouseLeave: handleMenuClose,
              }}
              sx={{ mt: 3 }}
            >
              <MenuItem onClick={handleMenuClose}>Introduction</MenuItem>
              <MenuItem onClick={handleMenuClose}>Updates</MenuItem>
              <MenuItem onClick={handleMenuClose}>Featured Posts</MenuItem>
            </Menu>
          </Box>

          {/* Accommodation */}
          <Box>
            <Button
              onMouseEnter={(e) => handleMenuOpen(e, "accommodation")}
              onClick={() => navigate("/accommodation")}
              sx={{ color: "white" }}
            >
              Accommodation
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={openMenu === "accommodation"}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseEnter: () => setOpenMenu("accommodation"),
                onMouseLeave: handleMenuClose,
              }}
              sx={{ mt: 3 }}
            >
              <MenuItem onClick={handleMenuClose}>Hotels</MenuItem>
              <MenuItem onClick={handleMenuClose}>Resorts</MenuItem>
              <MenuItem onClick={handleMenuClose}>Hostels</MenuItem>
            </Menu>
          </Box>

          {/* Templates */}
          <Box>
            <Button
              onMouseEnter={(e) => handleMenuOpen(e, "templates")}
              onClick={() => navigate("/templates")}
              sx={{ color: "white" }}
            >
              Templates
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={openMenu === "templates"}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseEnter: () => setOpenMenu("templates"),
                onMouseLeave: handleMenuClose,
              }}
              sx={{ mt: 3 }}
            >
              <MenuItem onClick={handleMenuClose}>Business</MenuItem>
              <MenuItem onClick={handleMenuClose}>Portfolio</MenuItem>
              <MenuItem onClick={handleMenuClose}>E-commerce</MenuItem>
            </Menu>
          </Box>

          {/* Sections */}
          <Box>
            <Button
              onMouseEnter={(e) => handleMenuOpen(e, "sections")}
              onClick={() => navigate("/sections")}
              sx={{ color: "white" }}
            >
              Sections
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={openMenu === "sections"}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseEnter: () => setOpenMenu("sections"),
                onMouseLeave: handleMenuClose,
              }}
              sx={{ mt: 3 }}
            >
              <MenuItem onClick={handleMenuClose}>Header</MenuItem>
              <MenuItem onClick={handleMenuClose}>Footer</MenuItem>
              <MenuItem onClick={handleMenuClose}>Sidebar</MenuItem>
            </Menu>
          </Box>

          {/* Mega Menu */}
          <Box>
            <Button
              onMouseEnter={(e) => handleMenuOpen(e, "mega-menu")}
              onClick={() => navigate("/mega-menu")}
              sx={{ color: "white" }}
            >
              Mega Menu
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={openMenu === "mega-menu"}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseEnter: () => setOpenMenu("mega-menu"),
                onMouseLeave: handleMenuClose,
              }}
              sx={{ mt: 3 }}
            >
              <MenuItem onClick={handleMenuClose}>Trending</MenuItem>
              <MenuItem onClick={handleMenuClose}>Popular</MenuItem>
              <MenuItem onClick={handleMenuClose}>New Releases</MenuItem>
            </Menu>
          </Box>

          {/* Search Icon */}
          <IconButton sx={{ color: "white" }}>
            <SearchIcon />
          </IconButton>
        </Box>




            <Button
             variant="contained"
                sx={{
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