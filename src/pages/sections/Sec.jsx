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

  const isMobileView=UMQ("(max-width:900px)");

  

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
          // mb:20,
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
        <HeroSlider />
</Box>





      <Box>
        <HeroSlider1 />
      </Box>


      <Box>
        <Panel />
      </Box>










      <Box>


      </Box>




      <Box>
        <IS />

      </Box>




      <Box>
        <IST />

      </Box>



      <Box>

      </Box>



      <Box>
        <ISCD />

      </Box>



      <Box>
        <ISMS />

      </Box>



      <Box>
        <ICN />
      </Box>


      <Box>
        <ICN2 />
      </Box>





      <Box>
        <ExJsHt />
      </Box>








    </>)
}
export default Sec;

