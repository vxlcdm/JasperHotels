import React, { useState } from "react";
import { Box, IconButton,Typography ,Button,   } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HotelIcon from "@mui/icons-material/Hotel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";








const infoItems = [
  { title: "Check In", icon: <AccessTimeIcon fontSize="medium" /> },
  { title: "Check Out", icon: <AccessTimeIcon fontSize="medium" /> },
  { title: "Adults", icon: <GroupIcon fontSize="medium" /> },
  { title: "Children", icon: <ChildCareIcon fontSize="medium" /> },
  { title: "Room", icon: <MeetingRoomIcon fontSize="medium" /> }
];
const images = [
  "https://picsum.photos/seed/picxcsum/2560/1440",
  "https://picsum.photos/seed/picsxum/2560/1440"
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
const [isButtonHover, setIsButtonHover] = useState(false);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return ( <>



<Box
        sx={{
          // my: 10,
          // position: "relative",
          // border: "3px  double black",

        }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="black"
          sx={{
            fontSize: { xs: "1.1rem", sm: "2.5rem" },
            mt: 0,
            pt: 8,
            pb: 0,
            // bgcolor: "#328E6E",
            textAlign: "center",
          }}
        >
        Hero Slideshow
        </Typography>




    <Box
    sx={{
        
        width: "100%",
        height: "70vh",
        position: "relative",
        overflow: "hidden"
      }}>



    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Box
        component="img"
        src={images[index]}
        alt="slider"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.5s ease-in-out",
          scale:isButtonHover?"1.1":"",

        }}
      />

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          zIndex: 10
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          zIndex: 10
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>








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





        





<>
 
    <Box
      sx={{
        textAlign: "center",
        // py: 10,
        // px: 2,
           
        backgroundColor: isButtonHover ? "rgb(122, 248, 255,0.3)" : "hsla(0, 0%, 0%, 0)",
        transition:"all ease 0.4s",
        position:"absolute",
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        display:"flex",
        // border:"2px solid blue",
        justifyContent:"center",
        // alignItems:"center",
      }}
    >


        <Box sx={{
            width:"100%",
            height:"100%",
            // border:"1px solid red",
             display:"flex",
        // border:"2px solid blue",
        justifyContent:"center",
        flexDirection:'column',
        alignItems:"center",

            
        }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Sacramento', cursive",
          fontSize: { xs: "2.5rem", md: "4rem" 
            ,lg:"6rem"
          },
          color: "white",
          mb: 2
        }}
      >
        Welcome to our site
      </Typography>

      <Typography variant="h6" sx={{ mb: 4, color: "white" }}>
        START YOUR SERVICE
      </Typography>

      <Button
        onMouseEnter={() => setIsButtonHover(true)}
        onMouseLeave={() => setIsButtonHover(false)}
        sx={{
          px: isButtonHover ? 4 : 2,
          py: 1.5,
          fontSize: "1rem",
          backgroundColor: "#1976d2",
          color: "white",
          borderRadius: 3,
          transition: "all 0.3s ease",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#1565c0"
          }
        }}
      >
        {isButtonHover ? "Explore Hotels >" : "Explore Hotels"}
      </Button>
    </Box>
   </Box> 
</>























      </Box>
    </Box>
    </>
  );
};

export default HeroSlider;
