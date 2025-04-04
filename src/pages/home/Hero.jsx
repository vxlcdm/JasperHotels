import React from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import Accommodation from './../Accommodation';
import StarIcon from "@mui/icons-material/Star"; 
import VisibilityIcon from "@mui/icons-material/Visibility"; 
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied"; 

const Hero = () => {
  

  return (
    <>
    <section id="s">
    </section>
    
    
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      
      {/* Hero Banner */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: "url('https://demo.klayemorrison.com/jasper-hotel/preview/2000x850-1.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
           backgroundAttachment:"fixed",
           color:"white",
          textAlign: "center",
          flexDirection:"column",
        }}
      >
        <Typography variant="h1" fontWeight="bold" sx={{fontFamily: "Sacramento"}}>Welcome to Our Site</Typography>
        <Typography variant="h5" sx={{m:2, letterSpacing:"5px"}}>START SERVICE</Typography>

        <Button variant="contained" sx={{px:4, py:2,display:"flex", flexDirection:"row",  fontSize:"1.2rem", overflow:"hidden", height:"70px", width:"240px",
          "&:hover":{
            transition:"0.4s all ease",
              paddingRight: "80px",
              width:"300px"
          }
        }}>
          <Typography variant="h5" sx={{textWrap:"nowrap", pl:6}}>EXPLORE  HOTELS</Typography>
           <Typography variant="h5" sx={{ml:4}}> > </Typography>
            </Button>
      </Box>
















       <Container sx={{ py: 10 }}>
          <Box sx={{display:"flex", justifySelf:"center", flexDirection:"column"}}>
            <Typography variant="h4" fontWeight="800" sx={{textAlign:"center"
          , color:"blueviolet",
        }}>Premium Accommodation</Typography>
        <Typography variant="h5" fontWeight="" sx={{textAlign:"center", mt: 2, pb:10}}>Lorem ipsum dolor sit amet, consectetuer adipiscing</Typography>
          </Box>

      <Grid container spacing={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        
         {/* First Image */}
        <Grid item xs={12} md={4} sx={{
          pb:1,
          "&:hover":{
            scale:(1.1),
            backgroundColor:"lightblue",
            cursor:"pointer",
            borderRadius:"5px",
            
            transition:"0.4s all ease"

          }
        }}>
          <Box sx={{ width:"100%", border:""}}>
          <Box
            component="img"
            src="https://picsum.photos/seed/2w89/335/300"
            alt="Luxury Stay"
            sx={{ width:"100%", borderRadius: 2 }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>Luxury Stay</Typography>
          <Typography variant="body2" sx={{maxWidth:"333.74px"}}>
            Experience world-class comfort with premium amenities .
          </Typography>
          </Box>
        </Grid>


         {/* First Image */}
        <Grid item xs={12} md={4} sx={{
          pb:1,
          "&:hover":{
            scale:(1.1),
            backgroundColor:"lightblue",
            cursor:"pointer",
            borderRadius:"5px",
            
            transition:"0.4s all ease"

          }
        }}>
          <Box sx={{ width:"100%", border:""}}>
          <Box
            component="img"
            src="https://picsum.photos/seed/28dwqxx9/335/300"
            alt="Luxury Stay"
            sx={{ width:"100%", borderRadius: 2 }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>Luxury Stay</Typography>
          <Typography variant="body2" sx={{maxWidth:"333.74px"}}>
            Experience world-class comfort with premium amenities. Lorem ipsum dolor sit amet.
          </Typography>
          </Box>
        </Grid>


         {/* First Image */}
        <Grid item xs={12} md={4} sx={{
          pb:1,
          "&:hover":{
            scale:(1.1),
            backgroundColor:"lightblue",
            cursor:"pointer",
            borderRadius:"5px",
            
            transition:"0.4s all ease"

          }
        }}>
          <Box sx={{ width:"100%", border:""}}>
          <Box
            component="img"
            src="https://picsum.photos/seed/28iiftw9/335/300"
            alt="Luxury Stay"
            sx={{ width:"100%", borderRadius: 2 }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>Luxury Stay</Typography>
          <Typography variant="body2" sx={{maxWidth:"333.74px"}}>
            Experience world-class comfort with premium amenities .
          </Typography>
          </Box>
        </Grid>
 </Grid>
      <Button variant="contained" sx={{mt:10,px:4, py:0,display:"flex", flexDirection:"row", justifySelf:"center", fontSize:"1.2rem", overflow:"hidden", height:"50px", width:"240px",
          "&:hover":{
            transition:"0.1s all ease",
              paddingRight: "80px",
              width:"300px"
          }
        }}>
          <Typography variant="h6" sx={{textWrap:"nowrap", pl:7}}>See all rooms</Typography>
           <Typography variant="h5" sx={{ml:4}}> > </Typography>
            </Button>
    </Container>






      {/* One Big Image */}
      <Box
        sx={{
          height: "80vh",
          backgroundImage: "url('https://demo.klayemorrison.com/jasper-hotel/preview/1240x650-2.jpg')", // Replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          my: 4,
        }}
      />















      {/* Lots of Lorem Text */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight="800" sx={{textAlign:"center"
          , color:"blueviolet",
        }}>Jasper Hotel Template</Typography>
        <Typography variant="h5" fontWeight="" sx={{textAlign:"center", mt: 2}}>Lorem ipsum dolor sit amet, consectetuer adipiscing</Typography>
        <Typography variant="body1" sx={{ mt: 6, textAlign:"center" }}>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Lorem ipsum dolor sit amet, consectetuer.
        </Typography>
      </Container>












      {/* Three Sections (Side by Side) */}
       <Container sx={{ py: 10, textAlign:"center" }}>
      <Grid container spacing={6}   sx={{display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
        
        {/* First Section */}
        <Grid item xs={12} md={4}>
          <Box sx={{width:"100%"}}>
          <StarIcon sx={{ color: "gold", fontSize: 40,
            border:"3px gold dashed", p:3, borderRadius:100,  
           }} />
          <Typography variant="h5" fontWeight="bold" sx={{py:2}}>#1 on TripAdvisor</Typography>
          <Typography variant="body2" sx={{maxWidth:"343px"}}>
            Experience world-class comfort with premium amenities, stunning views, and top-tier services.Experience world-class comfort with premium amenities, stunning views, and top-tier services.Experience world-class comfort with premium amenities, stunning views, and top-tier services.
          </Typography>
          </Box>
        </Grid>

        {/* Second Section */}
        <Grid item xs={12} md={4}>
          <Box sx={{width:"100%"}}>
          <VisibilityIcon sx={{ color: "blue", fontSize: 40,
            border:"3px gold dashed", p:3, borderRadius:100
           }} />
          <Typography variant="h5" fontWeight="bold"  sx={{py:2}}  >Award-Winning Chefs</Typography>
          <Typography variant="body2" sx={{maxWidth:"343px"}}>
            Relax in scenic beachfront resorts, offering breathtaking ocean views and tropical bliss.Relax in scenic beachfront resorts, offering breathtaking ocean views and tropical bliss.Relax in scenic beachfront resorts, offering breathtaking ocean views and tropical bliss.
          </Typography>
          </Box>
        </Grid>

        {/* Third Section */}
        <Grid item xs={12} md={4}>
          <Box sx={{width:"100%"}}>
          <SentimentSatisfiedIcon sx={{ color: "green", fontSize: 40,
            border:"3px gold dashed", p:3, borderRadius:100
           }} />
          <Typography variant="h5" fontWeight="bold"  sx={{py:2}}  >24 Hour Concierge</Typography>
          <Typography variant="body2" sx={{maxWidth:"343px"}}>
            Embark on thrilling adventures and explore stunning landscapes across the world.Embark on thrilling adventures and explore stunning landscapes across the world.Embark on thrilling adventures and explore stunning landscapes across the world.
          </Typography>
          </Box>
        </Grid>

      </Grid>
    </Container>







      {/* Three Final Images (Side by Side) */}
       <Container sx={{ py: 5, width:"1170px" }}>
      <Grid container spacing={0} justifyContent="center"
      >
        
      <Grid item xs={12} md={4}
      sx={{
         
        "&:hover img":{
          cursor:"pointer",
           transform: "scale(1.2)",  
      transition: "transform 0.3s ease-in-out",
      
        }
      }}
      >
       <Box sx={{ position: "relative", display: "inline-block", width: "100%", overflow:"hidden" }}>
      {/* Image */}
      <Box
        component="img"
       src="https://picsum.photos/id/299/370/300"
        alt="Beach Resort"
        sx={{ width: "100%", borderRadius: 0, display: "block",  }}
      />
      {/* Text Overlay */}
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.1rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Adds contrast
          padding: "8px 16px",
          borderRadius: "5px",
        }}
            >
           EXPLORE HOTEL
          </Typography>
           </Box>
          </Grid>


        {/* Second Image */}
       <Grid item xs={12} md={4}
      sx={{
       
        "&:hover img":{
          cursor:"pointer",
           transform: "scale(1.2)",  
      transition: "transform 0.3s ease-in-out",
      
        }
      }}
      >
       <Box sx={{ position: "relative", display: "inline-block", width: "100%"  ,overflow:"hidden" }}>
      {/* Image */}
      <Box
        component="img"
        src="https://picsum.photos/id/381/370/300"
        alt="Beach Resort"
        sx={{ width: "100%", borderRadius: 0, display: "block" }}
      />
      {/* Text Overlay */}
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.1rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Adds contrast
          padding: "8px 16px",
          borderRadius: "5px",
        }}
            >
           ACCOMMODATION
          </Typography>
           </Box>
          </Grid>

         <Grid item xs={12} md={4}
      sx={{
        
        "&:hover img":{
          cursor:"pointer",
           transform: "scale(1.2)",  
      transition: "transform 0.3s ease-in-out",
      
        }
      }}
      >
       <Box sx={{ position: "relative", display: "inline-block", width: "100%", overflow:"hidden" }}>
      {/* Image */}
      <Box
        component="img"
       src="https://picsum.photos/id/249/370/300"
        alt="Beach Resort"
        sx={{ width: "100%", borderRadius: 0, display: "block" }}
      />
      {/* Text Overlay */}
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.1rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Adds contrast
          padding: "8px 16px",
          borderRadius: "5px",
        }}
            >
           RESTAURANT
          </Typography>
           </Box>
          </Grid>





 

      </Grid>
    </Container>





    </Box>
    </>
  );
};

export default Hero;
