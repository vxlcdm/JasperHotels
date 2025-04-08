import React, { useState } from 'react';
import { Box, IconButton, Typography, } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const images = [
  "https://picsum.photos/seed/picsf34m/2560/1440",
  "https://picsum.photos/seed/picsfgf2s78udfm/2560/1440",
  "https://picsum.photos/seed/picccdfacrbum/2560/1440",
  "https://picsum.photos/seed/111sdm/2560/1440",
];

export default function IS() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

 

  return (




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
        Image Slideshow
      </Typography>













    <Box
      sx={{
        position: 'relative',
        maxWidth: '1170px',
        display:"flex",
        width:"100%",
        justifySelf:"center",
        alignSelf:"center",
        height: '75vh',
        bgcolor: 'black',
        overflow: 'hidden',
      }}
    >
      
      <Box
        component="img"
        src={images[current]}
        alt={`Image ${current}`}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

       
      <IconButton
        onClick={prev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 6,
          transform: 'translateY(-50%)',
          zIndex: 2,
          color: 'white',
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
        }}
      >
        <ChevronLeft fontSize="large" />
      </IconButton>

       
      <IconButton
        onClick={next}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 6,
          transform: 'translateY(-50%)',
          zIndex: 2,
          color: 'white',
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
        }}
      >
        <ChevronRight fontSize="large" />
      </IconButton>

     
      </Box>
    </Box>
  );
}
