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
import {Modal, Drawer, List, ListItem, ListItemButton, Select, ListItemText ,TextField} from "@mui/material";
import {    useTheme,     } from '@mui/material';
import { useMediaQuery as UMQ } from '@mui/material';
import Temp2 from './Temp2';
import { Maximize } from '@mui/icons-material';
import 'country-flag-icons/react/3x2';
import ExpAccRes from './ExpAccRes';
import { Link } from 'react-router-dom';
import {    useMediaQuery,   } from '@mui/material';







const navItems = [
  {
    label: "Home",
    path: "/home",
    subItems: [
      { label: "Dashboard", path: "/home/dashboard" },
      { label: "News", path: "/home/news" },
      { label: "Updates", path: "/home/updates" }
    ]
  },
  {
    label: "Accommodation",
    path: "/accommodation",
    subItems: [
      { label: "Our Team", path: "/about/team" },
      { label: "Mission", path: "/about/mission" },
      { label: "Careers", path: "/about/careers" }
    ]
  },
   {
    label: "Templates",
    path: "/templates",
    subItems: [
      { label: "Support", path: "/contact/support" },
      { label: "Feedback", path: "/contact/feedback" },
      { label: "FAQs", path: "/contact/faqs" }
    ]
  },
  {
    label: "Sections",
    path: "/sections",
    subItems: [
      { label: "Technology", path: "/sections/tech" },
      { label: "Health", path: "/sections/health" },
      { label: "Entertainment", path: "/sections/entertainment" }
    ]
  },
 
  {
    label: "Mega Menu",
    path: "#",
    
  },
  {
    label: <SearchIcon /> ,
    path: "#",
     
  }
];


const countries = [
  { code: "EN", label: "English", flag: "🇺🇸" },
  { code: "FR", label: "French", flag: "🇫🇷" },
  { code: "DE", label: "German", flag: "🇩🇪" },
  { code: "JP", label: "Japanese", flag: "🇯🇵" },
  { code: "IN", label: "Hindi", flag: "🇮🇳" },
];

 const menuData = [
  {
    title: 'Services',
    path: '/services',
    submenu: [
      { label: 'Room Service', path: '/services/room' },
      { label: 'Spa', path: '/services/spa' },
      { label: 'Laundry', path: '/services/laundry' },
    ],
  },
  {
    title: 'Dining',
    path: '/dining',
    submenu: [
      { label: 'Restaurant', path: '/dining/restaurant' },
      { label: 'Bar', path: '/dining/bar' },
      { label: 'Coffee Lounge', path: '/dining/coffee' },
    ],
  },
  {
    title: 'Activities',
    path: '/activities',
    submenu: [
      { label: 'Gym', path: '/activities/gym' },
      { label: 'Swimming Pool', path: '/activities/pool' },
      { label: 'Yoga Classes', path: '/activities/yoga' },
    ],
  },
];



function Navbar() {
               const navigate= useNavigate();
 
   const theme = useTheme();
   const [isHovered, setIsHovered]= useState(-1);
   const [isHoveredJ, setIsHoveredJ]= useState(-1);
   console.log(isHovered);
   
   const isMobile= UMQ("(max-width:899.5px");
   const isSmallMobile=UMQ("(max-width:349.50px");
   const mobile700=UMQ("(max-width:700px)");
   const isPaddingReq=UMQ(theme.breakpoints.down("md"));
   
   const isMobileSD = useMediaQuery(theme.breakpoints.down('sm'));
 
  const [language, setLanguage] = useState("EN");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const [open, setOpen] = useState(false);
    
  const toggleDrawer = (state) => {
    setOpen(state);
  };

const handleNavigation = (path) => {
    navigate(path);   
    toggleDrawer(false);  
  };
 
  const [openM, setOpenM] = useState(false);

  const handleOpen = () => setOpenM(true);
  const handleClose = () => setOpenM(false);
  const [searcBar, setSearchBar]=useState(false);
  const handleOpenSearch=()=>setSearchBar(true);
  const handleCloseSearch=()=>setSearchBar(false);




  const selectedCountry = countries.find((c) => c.code === language);
  const filteredCountries = countries.filter((c) => c.code !== language);
  const [openLang, setOpenLang] = useState(false);



  return (
    <AppBar position="sticky" sx={{background:"white",
     py:isPaddingReq?0:2,
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
           

        <Box component="img" src="https://demo.klayemorrison.com/jasper-hotel/system/images/logo.png" alt="Logo" sx={{ height: 30 }} />


 









       <>
     
      <IconButton onClick={()=>toggleDrawer(true)} sx={{ display:{md:"block", lg:"none", marginLeft:"auto" }  }}>
        <MenuIcon />
      </IconButton>
 

      <Drawer anchor="right" open={open} onClose={()=>toggleDrawer(false)}
      sx={{ display:{md:"block", lg:"none", marginLeft:"auto" }  }}
      >
        <Box sx={{ width: 250, p: 2,
          bgcolor: 'hsla(100,10%,10%,0.9)',
        }}>
            <IconButton onClick={() => toggleDrawer(false)} sx={{ position: "absolute", top: 3, right: 1 ,

            }}>
            <CloseIcon />
          </IconButton>
           <Box
      sx={{
        // width: isMobileSD ? 200 : 300,
        color: 'white',
        px: 3,
        height: '115vh',
        // bgcolor: 'hsla(100,10%,10%,0.5)',

      }}
    >
      <Typography variant="h5" gutterBottom textAlign={isMobileSD ? 'center' : 'left'}
      sx={{
        bgcolor: 'hsla(100,10%,10%,0.5)',
        p: 2,

      }}>
        Menu
      </Typography>

      <List>
        {menuData.map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <ListItem component={Link} to={item.path} sx={{ textDecoration: 'none' }}>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ color: 'white' ,
                  bgcolor: 'hsla(100,10%,10%,0.5)',
                    px: 0,

                  }}>
                    {item.title}
                  </Typography>
                }
              />
            </ListItem>
            {item.submenu.map((sub, subIndex) => (
              <ListItem
                key={subIndex}
                component={Link}
                to={sub.path}
                sx={{ pl: 5, textDecoration: 'none' }}
              >
                <ListItemText
                  primary={
                    <Typography variant="h5" sx={{ color: 'white', fontSize: '1rem' ,
                    bgcolor: 'hsla(100,10%,10%,0.5)',
                      px: 1,

                    }}>
                      {sub.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Box>
        </Box>
      </Drawer>
    </>





<>
      <Modal open={openM} onClose={handleClose}
      sx={{
        display:{md:"none", lg:"flex"}
      }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "lightblue",
            boxShadow: 24,
            p: 0,
            // px:60,
            borderRadius: 2,
            minWidth: 300,
            width:"80%",
            display:'flex',
            // border:"1px solid red",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
          }}
        >
          <ExpAccRes/>
        </Box>
      </Modal>
</>





 <>
      <Modal open={searcBar} onClose={handleCloseSearch}
      sx={{
        display:{md:"none", lg:"flex"}
      }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "lightblue",
            boxShadow: 24,
            p: 4,
            // px:60,
            borderRadius: 2,
            minWidth: 300,
            width:"80%",
            display:'flex',
            // border:"1px solid red",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",

          }}
        >
          <Box sx={{
                 display:'flex',
            // border:"1px solid red",
            // flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            width:"30%",

          }}>
            <TextField
      label="WHAT ARE YOU LOOKING FOR? "
      variant="standard"
      sx={{width:"90%",
        border:"none",
        outline:"none",
      }}
      margin="normal"
    /> <SearchIcon/>
          </Box>

          <Button onClick={handleCloseSearch} sx={{ mt: 2 }} variant="outlined">
            Close
          </Button>
        </Box>
      </Modal>
</>
























  
 







   <Box sx={{ flexGrow: 1, display: {  xs:'none', lg: "flex"     }, gap: "20px",  color:"black",
  //  border:"1px solid black" ,
   justifyContent:"center",

   
   }}>

<>
       

          
      <ListItem sx={{
        flexDirection:isSmallMobile?"column":"row",
        justifyContent:"center",
        alignItems:"center",
        justifySelf:"center",
        alignSelf:'center',
        position:"relative",
        width: "max-content",
        m:0,
        p:0,

        // gap:mobile700?2:5,

        textAlign:"center",
        // display:"flex",
        // border:"1px solid red"
      }}>


          {navItems.map((item, index)=>{
             const isActive =
  item.path === "/home"
    ? location.pathname === "/home" || location.pathname === "/"
    : location.pathname.startsWith(item.path);


            return( <ListItemText 
           primaryTypographyProps={{
             sx:{
      fontSize: isMobile? "10px":"16px",

      fontWeight:500,
      justifyContent:"center",
      alignItems:"center",
      // border:"1px solid black",
      textAlign:"center",
              width:"120px",
        // width: "max-content",
        // boxSizing:"border-box",

        // gap:10,
        height: 50,
        m:0,
        pt:2,
        pb:0,
         color:
      isHovered === index ? "primary.main": isActive ? "red": "black",
        // backgroundColor: isHovered === index ? '' : '',
       
        // transition: 'background-color 0.3s ease',
        cursor:  isHovered === index?'pointer': "default",
      
    }

  }}  key={index  || item.id}
   onClick={() => {
      if(index===4){
        handleOpen();
      }
      else if(index===5)
      {
          handleOpenSearch();
      }
      else{

        navigate(item.path);
      }
                     }}
    onMouseEnter={() =>{
      setIsHovered(index)
    }} 
    onMouseLeave={() => setIsHovered(null)}
    >
              {item.label}
              
                {item.subItems && item.subItems.length > 0 && (
                   <Box>
              {item.subItems.map((value, subindex)=>{
                const isSubActive = location.pathname.startsWith(item.subItems.path);;
                  return(
                <MenuItem  key={subindex }
                     onClick={(e) => {
                        e.stopPropagation();
                        navigate(value.path);
                     }}
                     onMouseEnter={()=>{
                      setIsHoveredJ(index);
                     }}
                     onMouseLeave={()=>{
                      setIsHoveredJ(null)
                     }}
                sx={{
                  // position:"absolute",
                  position:"relative",
                  top:45,
                  color:"white",
                  backgroundColor:"gray",
                  "&:hover":{
                    color:isSubActive?"red" :"black",
                  borderRadius:2,

                    backgroundColor:"darkgray"
                  },
                  display: isHovered===index   ?"flex" : "none",

                  flexDirection:"column-reverse",
                  // height:"100px",
                  // border:"1px solid blue",
                  textAlign:"center",
                  width:"100px",
                  // width: "max-content",
                  p:2,
                  px:10,
                  justifyContent:"center",
                  alignContent:"center",
                  alignSelf:"center",
                  justifySelf:'center',
                  // borderRadius:1,
                   
                }}>
                  {value.label}
                </MenuItem >)
                })

              }</Box>
                  )}
              
            </ListItemText >

        );
          })}



       
      </ListItem>
     



     
      </>
        </Box>




  


<Box sx={{
  position:"relative",
     display:{xs:"none", lg:"block"},
  // border:"1px solid black",
  py:2,
  px:9,
}}
   
>

  
      <Select
      
        value={language}
        onChange={handleChange}
        // variant="outlined"
            renderValue={() => (
          <span 
          style={{ fontSize: "1.3rem", color:"white" }}
          >
            {selectedCountry?.flag}
            </span>
        )}
         
         sx={{
                  position:"absolute",
                  outline:"none",
                  border:'none',
                  bottom:-7,
                  right:100,
                  color:"white",
                  display:{xs:"none", lg:"block"},
                  backgroundColor: "#ff4000",
                  transition: "padding-left 0.3s ease-in-out",
                  
                }}
        
       
      >
        {filteredCountries.map((country) => (

          <MenuItem key={country.code} value={country.code}>
            <Box display="flex" alignItems="center" gap={3}>
              <span style={{ fontSize: "1.4rem" }}>{country.flag}</span>
            </Box>
          </MenuItem>
        ))}
      </Select>
   
  
            <Button
             variant="contained"
                sx={{
                  position:"absolute",
                  bottom:-7,
                  right:-5,
                  display:{xs:"none", lg:"block"},
                  backgroundColor: "#ff4000",
                  transition: "padding-left 0.3s ease-in-out",
                  py:2,
                  paddingX: "16px", 
                  "&:hover": {
                    paddingLeft: "28px",  
                 },
                }}
                    >
                 
                 Book

                </Button>

</Box>
          
 
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;