import { AppBar, Box, ListItem, ListItemText, Toolbar, useTheme, MenuItem   } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useMediaQuery as UMQ } from '@mui/material';
import Temp2 from './Temp2';
import { Maximize } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';


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
    label: <SearchIcon />,
    path: "##",
     
  }
];







const Temp = ()=>{
    const navigate = useNavigate();
  const theme = useTheme();
  const [isHovered, setIsHovered]= useState(-1);
  const [isHoveredJ, setIsHoveredJ]= useState(-1);
  console.log(isHovered);
  
  const isMobile= UMQ("(max-width:899.5px");
  const isSmallMobile=UMQ("(max-width:349.50px");
  const mobile700=UMQ("(max-width:700px)");


    return(<>
      <AppBar>
        <Toolbar sx={{
          // border:"1px solid white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          backgroundColor:"white"
        }}>

          
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
        pt:3,
        pb:0,
         color:
      isHovered === index ? "primary.main": isActive ? "red": "black",
        // backgroundColor: isHovered === index ? '' : '',
       
        // transition: 'background-color 0.3s ease',
        cursor:  isHovered === index?'pointer': "default",
      
    }

  }}  key={index || item.id }
   onClick={() => {
                        navigate(item.path);
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
                  top:40,
                  color:"white",
                  backgroundColor:"gray",
                  "&:hover":{
                    color:isSubActive?"red" :"black",
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
                  borderRadius:1,
                   
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
      </Toolbar>
      </AppBar>



      <Temp2/>
      </>)
  };

  export default Temp;