import React, { useState } from 'react';
import { Box, IconButton, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const images = [
  "https://picsum.photos/seed/picsf34m/2560/1440",
  "https://picsum.photos/seed/picsfgf2s78udfm/2560/1440",
  "https://picsum.photos/seed/picccdfacrbum/2560/1440",
  "https://picsum.photos/seed/111sdm/2560/1440",
];

export default function ISMS() {
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
        Image Slideshow - Map Sidebar
        </Typography>











    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        
        width: '100%',
        bgcolor: '#f5f5f5',
        //  height:"70vh",
        flexDirection: isMobile ? 'column' : 'row',
        // border:"1px solid red",
        maxWidth:"1170px",
        height: {xs: '110vh',sm:"90vh", md:"70vh" }   ,
        
        position: 'relative',
        justifySelf:"center",
        alignSelf:"center",
       
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          flex: 1,
          height: isMobile ? '80vh' : '100%',
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
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' },
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
          flex: isMobile ? 'unset' : '0 0 300px',
          width: isMobile ? '100%' : '300px',
          height: isMobile ? 'auto' : '100%',
          position: 'relative',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        }}
      >
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24152.964022580985!2d-74.0059412!3d40.7127755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjYuNSJX!5e0!3m2!1sen!2sus!4v1617200607374!5m2!1sen!2sus"
          width="100%"
          height="100%"
          sx={{
            height: isMobile ? '50vh' : '100%',
          }}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <Box
          sx={{
            position: 'absolute',
            top: "50%",
            left: "50%",
            width: '50%',
            height: '50%',
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
              transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ mb: 1 }}>Jasper Hotels</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>123 Sunset Blvd, Dream City, NY</Typography>
          <Button variant="contained" color="primary">See Location</Button>
        </Box>
      </Box>
      </Box>
    </Box>
  );
}
