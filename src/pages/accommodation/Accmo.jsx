import React from "react";
import {Container} from "@mui/material";
import { useState } from "react";
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

const features = [
  { icon: <CheckCircleIcon fontSize="large" />, title: "Rate Guarantee", text: "We ensure the best rates." },
  { icon: <VisibilityIcon fontSize="large" />, title: "Fine Details", text: "Luxury designs with attention to detail." },
  { icon: <WbSunnyIcon fontSize="large" />, title: "Large Balcony", text: "Enjoy spacious balconies." },
  { icon: <ForumIcon fontSize="large" />, title: "Concierge", text: "24/7 concierge services available." },
  { icon: <PermMediaIcon fontSize="large" />, title: "Media System", text: "High-quality media entertainment." },
  { icon: <PhoneInTalkIcon fontSize="large" />, title: "24/7 Support", text: "Help is always a call away." },
];

const Accmo = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url("https://picsum.photos/seed/icwe3fvdah/1920/1080")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
           backgroundAttachment:"fixed",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
       <Typography 
  variant="h4" 
  fontWeight="bold" 
  sx={{ fontSize: { xs: "2.2rem", sm: "2.9rem", md: "3.6rem", lg: "4.3rem" } }}
>
  Our Accommodations
</Typography>


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
            src="https://picsum.photos/id/299/335/300"
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
            src="https://picsum.photos/id/369/335/300"
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
            src="https://picsum.photos/seed/28dcsty9cvxsef/335/300"
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
            src="https://picsum.photos/seed/28dcsty9/335/300"
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
            src="https://picsum.photos/seed/sdfd/335/300"
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
            src="https://picsum.photos/seed/picsum/335/300"
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
    </Container>








   {/* Lots of Lorem Text */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight="800" sx={{textAlign:"center"
          , color:"blueviolet",
        }}>5 Star Hotel Rooms</Typography>
        <Typography variant="h5" fontWeight="" sx={{textAlign:"center", mt: 2}}>Lorem ipsum dolor sit amet, consectetuer adipiscing</Typography>
        <Typography variant="body1" sx={{ mt: 6, textAlign:"center" }}>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Lorem ipsum dolor sit amet, consectetuer.
        </Typography>
      </Container>












      {/* Features Section */}
      <Box sx={{ py: 8, px: 4, backgroundColor: "#f9f9f9" }}>
        <Grid container spacing={1} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: 4,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width:"220px",
                  height:"150px" ,
                  boxSizing:"border-box",
                  gap: 1,
                    transition: "0.3s",
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}

                  onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}

              >
                {feature.icon}
                <Typography variant="h6">{feature.title}</Typography>
                 {hoveredIndex === index && (
                  <Typography variant="body2" sx={{ color: "white", mt: -27, height:"50px",borderRadius:"5px",p:2,  backgroundColor:"green",
                    
     position: "relative",
    display: "inline-block",
    "&::after": {
      content: `"▼"`, // Looks longer/thicker
      display: "block",
      fontSize: "2rem",  // Increase size
      color: "green",
      marginTop: "8px",
      textAlign: "center",
    },
                   }}>
                    {feature.text}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Accmo;
