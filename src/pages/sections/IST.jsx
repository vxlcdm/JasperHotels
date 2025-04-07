import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const images = [
  "https://picsum.photos/seed/picsf34m/2560/1440",
  "https://picsum.photos/seed/picsfgf2s78udfm/2560/1440",
  "https://picsum.photos/seed/picccdfacrbum/2560/1440",
  "https://picsum.photos/seed/111sdm/2560/1440",
];

export default function IST() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const select = (index) => {
    setCurrent(index);
  };

  return (
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

      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          zIndex: 2,
        }}
      >
        {images.map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt={`Thumb ${i}`}
            onClick={() => select(i)}
            sx={{
              width: 80,
              height: 60,
              objectFit: 'cover',
              border: current === i ? '2px solid white' : '2px solid transparent',
              cursor: 'pointer',
              borderRadius: 1,
              transition: 'border 0.3s ease',
              opacity: current === i ? 1 : 0.6,
              '&:hover': {
                opacity: 1,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
