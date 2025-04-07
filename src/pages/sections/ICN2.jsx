import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import {useMediaQuery as UMQ} from '@mui/material';
import {useTheme} from '@mui/material';

const images = [
  "https://picsum.photos/seed/1rt/1920/1080",
  "https://picsum.photos/seed/2f/1920/1080",
  "https://picsum.photos/seed/3gf/1920/1080",
  "https://picsum.photos/seed/4fg/1920/1080",
  "https://picsum.photos/seed/5et/1920/1080"
];

const ICN = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const theme = useTheme();
    const isMobile= UMQ("(max-width:800px)");
    const isThemeTelling=UMQ(theme.breakpoints.down('md'));

      const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const getImageIndex = (offset) => {
    return (currentIndex + offset + totalImages) % totalImages;
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', p: 0 
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 
      gap:isMobile? 1:3 ,
            //   border:"4px blue solid",

      }}>
        <IconButton onClick={handlePrev}
        sx={{
            position:'absolute',
            top:"50%",
            left:5,
            bgcolor:isMobile? "black":"",
            color:isMobile?"white":"",
        }}
        >
          <ArrowBackIos />
        </IconButton>

        {[getImageIndex(-1), currentIndex, getImageIndex(1)].map((index, i) => (
          <Box
            key={i}
            sx={{
              width: i === 1 ? '95%':(isMobile? '0%' : '25%'),
              height: 500,
            //   width:"100%",
              backgroundImage: `url(${images[index]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
              boxShadow: i === 1 ? 4 : 1,
              transition: 'all 0.3s ease-in-out',
            //   transform: i === 1 ? 'scale(1.05)' : 'scale("1.05")'
            }}
          />
        ))}

        <IconButton onClick={handleNext}
        sx={{
            position:'absolute',
            top:"50%",
            right:5,
            bgcolor:isMobile? "black":" ",
            color:isMobile?"white":"",
        }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ICN;
