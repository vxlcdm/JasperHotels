import React from 'react';
import {Container} from "@mui/material";
// import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ForumIcon from "@mui/icons-material/Forum";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import HeroSlider from './HeroSlider';
import HeroSlider1 from './HeroSlider1';
import Panel from './Panel';
import ExJsHt from './ExJsHt';
import HotelIcon from "@mui/icons-material/Hotel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import IS from './IS';
import IST from './IST';
import ISCD from './ISCD';
import ISMS from './ISMS';
import ICN from './ICN';
import ICN2 from './ICN2';
import {useMediaQuery as UMQ } from '@mui/material';











const infoItems = [
  { title: "Check In", icon: <AccessTimeIcon fontSize="medium" /> },
  { title: "Check Out", icon: <AccessTimeIcon fontSize="medium" /> },
  { title: "Adults", icon: <GroupIcon fontSize="medium" /> },
  { title: "Children", icon: <ChildCareIcon fontSize="medium" /> },
  { title: "Room", icon: <MeetingRoomIcon fontSize="medium" /> }
];






























const Sec=()=>{

  const isMobileView=UMQ("(max-width:600px)");

    return(<>
 
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url("https://picsum.photos/seed/icdwe3fvdah/1920/1080")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
           backgroundAttachment:"fixed",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
       <Typography 
        variant="h4" 
        fontWeight="bold" 
        color="black"
        sx={{ fontSize: { xs: "2.2rem", sm: "2.9rem", md: "3.6rem", lg: "4.3rem" } }}
        >
        Slideshow Sections
        </Typography>
        </Box>




        <Box>
            <Typography 
             variant="h4" 
             fontWeight="bold" 
             color="Black"
             sx={{ fontSize: { xs: "2.2rem", sm: "2.9rem",   }, textAlign:"center", p:10 }}
             >
             Hero Slideshow
             </Typography>
        <Box
        sx={{
            display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        
        }}
      >
        <HeroSlider/>


        </Box>
        </Box>







        <Box>
            <Typography 
             variant="h4" 
             fontWeight="bold" 
             color="Black"
             sx={{ fontSize: { xs: "2.2rem", sm: "2.9rem", }, textAlign:"center", p:10 }}
             >
             Hero Slideshow - Image Only
             </Typography>
        <Box
        sx={{
          height: "75vh",
         
          display: "flex",
        
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
        <HeroSlider1/>
        </Box>
        </Box>



         <Box>
            <Typography 
             variant="h4" 
             fontWeight="bold" 
             color="Black"
             sx={{ fontSize: { xs: "2.2rem", sm: "2.9rem",   }, textAlign:"center", p:10 }}
             >
             Hero Panels
             </Typography>
        <Box
        sx={{
          height: "75vh",
        
          display: "flex",
        
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
        <Panel/>
        </Box>
        </Box>





















        <Box
        sx={{
          position:"relative",
        }}>
            <Typography 
             variant="h4" 
             fontWeight="bold" 
             color="Black"
             sx={{ fontSize: { xs: "2.2rem", sm: "2.9rem",   }, textAlign:"center", p:10 }}
             >
             Hero Banner
             </Typography>
        <Box
        sx={{
          height: "75vh",
          backgroundImage: `url("https://picsum.photos/seed/idcdfdvvcdswe3dfvcddvesvdah/1920/1080")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
        
          alignItems: "center",
          flexDirection:'column',
          gap:2,
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
        <Typography variant='h4'
        sx={{
          color:"white",
          fontWeight:600,
           backgroundColor: "hsla(0, 0.00%, 0.00%, 0.6)",
           p:1
        }}>
Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant='body1' sx={{
          color:"white",
          // fontWeight:300,
           backgroundColor: "hsla(0, 0.00%, 0.00%, 0.6)",
           p:1
        }}>
3 February, 2018
        </Typography>
        
         <Box
              sx={{
                width: "100%",
                backgroundColor: "hsla(0, 0.00%, 0.00%, 0.00)",
                position:"absolute",
                bottom: 10,
                left: 0,
                display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                zIndex:99,
        
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  px: 0,
                  py: 0,
                    maxWidth:"100%",
                    gap:0,
                    borderRadius:2,
               backgroundColor: "hsl(0, 3.60%, 11.00%)",
        
                }}
              >
                {infoItems.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      px: 1,
                      width:"100px",
                      py: 1,
                      color:"white",
                      borderRadius: 2,
                        fontSize:"0.8rem",
                      
                      boxSizing:"border-box",
                      transition: "background-color 0.3s ease",
                      "&:hover": {
                        backgroundColor: "gray"
                      }
                    }}
                  >
                    {item.icon}
                    <Typography fontWeight="bold" mt={1}
                    sx={{
                        fontSize:{xs:"0.5rem",
                            sm:"0.7rem",
                            md:"0.8rem",
        
                        },
        
                    }}>
                      {item.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
        
        </Box>
        </Box>





























         <Box>
            <Typography 
             variant="h4" 
             fontWeight="bold" 
             color="Black"
             sx={{ fontSize: { xs: "1.8rem", sm: "2.9rem",   }, textAlign:"center", p:10,px:1 }}
             >
             Image Slideshow
             </Typography>
        <Box
        sx={{
          height: "75vh",
          
          display: "flex",
        
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
        <IS/>
        </Box>
        </Box>




        <Box>
            <Typography 
             variant="h4" 
             fontWeight="bold" 
             color="Black"
             sx={{ fontSize: { xs: "1.8rem", sm: "2.9rem",   }, textAlign:"center", p:10, px:1 }}
             >
             Image Slideshow - Thumbnails
             </Typography>
        <Box
        sx={{
          height: "75vh",
         
          display: "flex",
        
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
        <IST/>
        </Box>
        </Box>



        <Box sx={{
        }}>
            <Typography 
             variant="h4" 
             fontWeight="bold" 
             color="Black"
             sx={{ fontSize: { xs: "1.8rem", sm: "2.9rem",  }, textAlign:"center", py:10,px:1 ,
          pb:isMobileView?24:15
                }}
             >
             Image Slideshow - Content Sidebar
             </Typography>
        <Box
        sx={{
          height: "75vh",
       
          display: "flex",
        
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
        <ISCD/>
        </Box>
        </Box>





        <Box>
            <Typography 
             variant="h4" 
             fontWeight="bold" 
             color="Black"
             sx={{ fontSize: { xs: "1.8rem", sm: "2.9rem",  }, textAlign:"center", p:1,
          py:isMobileView?24:15
                 }}
             >
             Image Slideshow - Map Sidebar
             </Typography>
        <Box
        sx={{
          height: "75vh",
        
          display: "flex",
        
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
         <ISMS/>
        </Box>
        </Box>



        <Box>
            <Typography 
             variant="h4" 
             fontWeight="bold" 
             color="Black"
             sx={{ fontSize: { xs: "1.8rem", sm: "2.9rem",   }, textAlign:"center", py:10,
          pt:isMobileView?24:15
                 }}
             >
             Image Carousel
             </Typography>
        <Box
        sx={{
          height: "75vh",
         
          display: "flex",
        
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
        <ICN/>
        </Box>
        </Box>





        <Box>
            <Typography 
             variant="h4" 
             fontWeight="bold" 
             color="Black"
             sx={{ fontSize: { xs: "1.8rem", sm: "2.9rem",   }, textAlign:"center", py:10 }}
             >
            Image Carousel - Navigation
             </Typography>
        <Box
        sx={{
          height: "75vh",
         
          display: "flex",
        
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
        <ICN2/>
        </Box>
        </Box>




        





          <Box sx={{mb:12}}>
            <Typography 
             variant="h4" 
             fontWeight="bold" 
             color="Black"
             sx={{ fontSize: { xs: "1.8rem", sm: "2.9rem", }, textAlign:"center", py:10,  }}
             >
            Visual Navigation
             </Typography>
        <Box
        
        sx={{
          height: "100vh",
         
          display: "flex",
        
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
        <ExJsHt/>
        </Box>
        </Box>













    </>)
}
export default Sec;

