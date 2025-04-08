import React, { useState } from 'react';
import { Box, IconButton, Typography, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const images = [
  "https://picsum.photos/seed/picsf34m/2560/1440",
  "https://picsum.photos/seed/picsfgf2s78udfm/2560/1440",
  "https://picsum.photos/seed/picccdfacrbum/2560/1440",
  "https://picsum.photos/seed/111sdm/2560/1440",
];

export default function  ISCD() {
  const [current, setCurrent] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:800px)');

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const select = (index) => setCurrent(index);

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
        Image Slideshow - Content Sidebar
        </Typography>











    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        // border:"1px solid red",
        maxWidth:"1170px",
        height: {xs: '110vh',sm:"100vh", md:"70vh" }   ,
        width: '100%',
        position: 'relative',
        justifySelf:"center",
        alignSelf:"center",
        bgcolor: 'white',
        overflow: 'hidden',
        // px:5,
      }}
    >
      
      <Box
        sx={{
          position: 'relative',
          flex: 1,
          height: isMobile ? '60vh' : '100%',
          overflow: 'hidden',
          bgcolor: 'black',
        }}
      >
        <Box
          component="img"
          src={images[current]}
          alt={`Slide ${current}`}
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
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.4)',
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
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.4)',
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
              onClick={() => select(i)}
              sx={{
                width: 80,
                height: 60,
                objectFit: 'cover',
                border: current === i ? '2px solid white' : '2px solid transparent',
                borderRadius: 1,
                cursor: 'pointer',
                opacity: current === i ? 1 : 0.6,
                transition: 'all 0.3s ease',
                '&:hover': { opacity: 1 },
              }}
            />
          ))}
        </Box>
      </Box>

      
      <Box
        sx={{
        //   flex: isMobile ? 'unset' : '0 0 300px',
        //   width: isMobile ? '100%' : '300px',
        //   height: isMobile ? 'auto' : '100%',
          bgcolor: 'lightblue',
          
          p:{xs:1,sm:2 ,md:3, lg:4},

          textAlign: isMobile ? "center" : "start",
  backgroundImage: 'url("https://picsum.photos/seed/pi22334554456cfhjiojkngug/1240/720")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        }}
      >
         


        <Typography variant="h5" gutterBottom sx={{ color: "white", fontWeight:800 }}>
  Our Hotel Features
</Typography>
<Typography variant="body1" gutterBottom sx={{ color: "white" }}>✓ Lorem ipsum dolor sit amet</Typography>
<Typography variant="body1" gutterBottom sx={{ color: "white" }}>✓ Aliquam tincidunt mauris eu risus</Typography>
<Typography variant="body1" gutterBottom sx={{ color: "white" }}>✓ Vestibulum auctor dapibus neque</Typography>
<Typography variant="body1" gutterBottom sx={{ color: "white" }}>✓ Nunc dignissim risus id metus</Typography>
<Typography variant="body1" gutterBottom sx={{ color: "white" }}>✓ Cras ornare tristique elit</Typography>
<Typography variant="body1" gutterBottom sx={{ color: "white" }}>✓ Vivamus vestibulum nulla nec ante</Typography>
<Typography variant="body1" gutterBottom sx={{ color: "white" }}>✓ Praesent placerat risus quis eros</Typography>
<Typography variant="body1" gutterBottom sx={{ color: "white" }}>✓ Fusce pellentesque suscipit nibh</Typography>
<Typography variant="body1" gutterBottom sx={{ color: "white" }}>✓ Integer vitae libero ac risus</Typography>

      </Box>





    </Box>
    </Box >
  );
}
