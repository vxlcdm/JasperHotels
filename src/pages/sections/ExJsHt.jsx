import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Button, Stack  } from "@mui/material";
 








const subtitles = [
  { text: "Explore Hotel", image: "https://picsum.photos/seed/explore/2560/1440" },
  { text: "Accommodation", image: "https://picsum.photos/seed/accommodation/2560/1440" },
  { text: "Restaurant", image: "https://picsum.photos/seed/restaurant/2560/1440" },
  { text: "Photo Gallery", image: "https://picsum.photos/seed/gallery/2560/1440" },
  { text: "Special Offer", image: "https://picsum.photos/seed/offer/2560/1440" },
  { text: "Location", image: "https://picsum.photos/seed/location/2560/1440" }
];



const ExJsHt=()=>{


 const [hoveredIndexImage, setHoveredIndexImage] = useState(null);


  const backgroundImage =
    hoveredIndexImage !== null
      ? subtitles[hoveredIndexImage].image
      : "https://picsum.photos/seed/jasperhero/2560/1440";



    return(<>
   <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        justifySelf:"center",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        transition: "background-image 0.5s ease"
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Sacramento",
          fontSize: { xs: "2.5rem", md: "4rem" },
          bgcolor:"hsla(10, 10%, 10%, 0.45)",
          p:3,mb:2,

        }}
      >
        Experience Jasper Hotel
      </Typography>

      <Stack
        direction={{xs:"column", sm:"column", md:"row"}}
        spacing={{xs:0, md:3}}
        sx={{ mt: 4,  flexWrap: "wrap",
           justifyContent: "center",
           justifyItems:"center",
           alignContent:"center",
          alignItems:"center",
          textAlign:"center",
          // height:"200px",
           rowGap: 1,
          // border:"2px solid red",
         }}
      >
        {subtitles.map((item, index) => (
          <Typography
            key={index}
            onMouseEnter={() => setHoveredIndexImage(index)}
             
            sx={{
              fontSize: "1.1rem",
              cursor: "pointer",
              bgcolor:"hsla(10, 10%, 10%, 0.45)",
          p:1,
          // m:2,
          display:'flex',
          flexWrap:"wrap",
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center",
              transition: "color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                color: "#ff5252",
                transform: "scale(1.1)"
              },

            }}
          >
            {item.text}
          </Typography>
        ))}
      </Stack>
    </Box>
</>)
}
export default ExJsHt;