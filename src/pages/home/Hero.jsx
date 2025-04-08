import React, { useState } from "react";
import { Box, Typography, Grid, Container, Button, Stack  } from "@mui/material";
import Accommodation from './../Accommodation';
import StarIcon from "@mui/icons-material/Star"; 
import VisibilityIcon from "@mui/icons-material/Visibility"; 
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied"; 
import HotelIcon from "@mui/icons-material/Hotel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";









const subtitles = [
  { text: "Explore Hotel", image: "https://picsum.photos/seed/explore/2560/1440" },
  { text: "Accommodation", image: "https://picsum.photos/seed/accommodation/2560/1440" },
  { text: "Restaurant", image: "https://picsum.photos/seed/restaurant/2560/1440" },
  { text: "Photo Gallery", image: "https://picsum.photos/seed/gallery/2560/1440" },
  { text: "Special Offer", image: "https://picsum.photos/seed/offer/2560/1440" },
  { text: "Location", image: "https://picsum.photos/seed/location/2560/1440" }
];




const infoItems = [
  { title: "Check In", icon: <AccessTimeIcon fontSize="medium" /> },
  { title: "Check Out", icon: <AccessTimeIcon fontSize="medium" /> },
  { title: "Adults", icon: <GroupIcon fontSize="medium" /> },
  { title: "Children", icon: <ChildCareIcon fontSize="medium" /> },
  { title: "Room", icon: <MeetingRoomIcon fontSize="medium" /> }
];

const Hero = () => {
  const [isButtonHover, setIsButtonHover] = useState(false);
   const [isSeeAllHover, setIsSeeAllHover] = useState(false);

 const [hoveredIndexImage, setHoveredIndexImage] = useState(null);

  const backgroundImage =
    hoveredIndexImage !== null
      ? subtitles[hoveredIndexImage].image
      : "https://picsum.photos/seed/jasperhero/2560/1440";





  return (
    <>
    <section id="s">
    </section>
    
    
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      
      {/* Hero Banner */}

      <Box
        sx={{
          mt:1,
          height: "100vh",
          backgroundImage: "url('https://demo.klayemorrison.com/jasper-hotel/preview/2000x850-1.jpg')", 
          // backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          position:"relative",
          alignItems: "center",
          justifyContent: "center",
           backgroundAttachment:"fixed",
           color:"white",
          textAlign: "center",
          flexDirection:"column",
          //  transition: "all 0.7s ease",
            backgroundSize: {
    xs: isButtonHover ? "530%" : "500%",
    sm: isButtonHover ? "280%" : "250%",
    md: isButtonHover ? "180%" : "150%",
    lg: isButtonHover ? "170%" : "140%",
    xl: isButtonHover ? "150%" : "120%",
  },
  // transition: "background-size 0.4s ease"
           
           backgroundRepeat:"no-repeat",
           transition: "all 0.7s ease",

        }}
      >
        <Box sx={{
                   width:"100%",
                   height:"100%",
                  //  border:"4px solid red",
                    display:"flex",
              //  border:"2px solid blue",
               justifyContent:"center",
               flexDirection:'column',
           transition: "all 0.7s ease",
               alignItems:"center",
               bgcolor: isButtonHover
  ? "hsla(10, 10%, 10%, 0.5)"
  : "hsla(10, 10%, 10%, 0.1)"
              //  bgcolor:"red",
       
                   
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
















       <Container sx={{ py: 10 ,
        display:"flex", justifySelf:"center", flexDirection:"column",
       }}>
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

 

              <Button
      onMouseEnter={() => setIsSeeAllHover(true)}
      onMouseLeave={() => setIsSeeAllHover(false)}
      sx={{
        px: isSeeAllHover ? 4 : 2,
        py: 1.5,
        mt:8,
        fontSize: "1rem",
        backgroundColor: "#1976d2",
        color: "white",
        display:"flex", 
        flexDirection:"row", 
        justifySelf:"center",
        alignSelf:"center",
        borderRadius: 3,
        transition: "all 0.3s ease",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#1565c0"
        }
      }}
    >
      {isSeeAllHover ? "See All Rooms >" : "See All Rooms"}
    </Button>


            
    </Container>






      
<>
   <Container sx={{ py: 0 ,
        display:"flex", 
        justifySelf:"center", flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        // border:"1px solid red",
       }}>
   <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "90%",
        justifySelf:"center",
        height: "95vh",
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
          p: { xs: 2, sm: 3 }, mb: 2,

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
    </Container>
</>













      {/* Lots of Lorem Text */}
      <Container sx={{ mt:6,py: 5 }}>
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
       <Container sx={{ py: 5, maxWidth:"1170px" }}>
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
          textAlign:"center"
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
