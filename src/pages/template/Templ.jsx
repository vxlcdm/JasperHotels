import React from "react";
import { Container, Grid ,Box, Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star"; 
import VisibilityIcon from "@mui/icons-material/Visibility"; 
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied"; 
import {
  Paper,LinearProgress
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
 
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ForumIcon from "@mui/icons-material/Forum";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";





const achievements = [
  { label: 'Guests Stayed', value: 225, max: 300 },
  { label: 'Meals Served', value: 198, max: 250 },
  { label: 'Tours Booked', value: 75, max: 100 },
  { label: 'Spa Treatments', value: 112, max: 150 },
];


const Templ = () => {
  return (<>


 <Box
        sx={{
          height: "100vh",
          backgroundImage: `url("https://picsum.photos/seed/icweswdxx3fvdah/1920/1080")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundAttachment:"fixed",
          color: "black",
          textAlign: "center",
        }}
      >
       <Typography 
  variant="h4" 
  fontWeight="bold" 
  color="white"
   
  sx={{ fontSize: { xs: "2.2rem", sm: "2.9rem", md: "3.6rem", lg: "4.3rem",    }  }}
>
  About Our Hotel
</Typography>
</Box>





 {/* Lots of Lorem Text */}
      <Container sx={{ pt: 10, pb:8 }}>
        <Typography variant="h4" fontWeight="800" sx={{textAlign:"center"
          , color:"blueviolet",
        }}>Experience Jasper Hotel</Typography>
        <Typography variant="h5" fontWeight="" sx={{textAlign:"center", mt: 2}}>Lorem ipsum dolor sit amet, consectetuer adipiscing</Typography>
        <Typography variant="body1" sx={{ mt: 6, textAlign:"center" }}>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Lorem ipsum dolor sit amet, consectetuer.
        </Typography>
      </Container>

 <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        mt:0,
        mb:15,
        color:"black"
      }}
    >
      <Button variant="outlined" sx={{ minWidth: 180, color:"black", background:"lightgrey", borderColor:"lightgrey", boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.4)"}}>
        <Typography variant="body1">Onsite Restaurant</Typography>
      </Button>
      <Button variant="outlined" sx={{ minWidth: 180, color:"black", background:"lightgrey", borderColor:"lightgrey", boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.4)"}}>
        <Typography variant="body1">24 Hours Concierge</Typography>
      </Button>
      <Button variant="outlined" sx={{ minWidth: 180, color:"black", background:"lightgrey", borderColor:"lightgrey", boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.4)"}}>
        <Typography variant="body1">50m Lap Pool</Typography>
      </Button>
      <Button variant="outlined" sx={{ minWidth: 180, color:"black", background:"lightgrey", borderColor:"lightgrey", boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.4)"}}>
        <Typography variant="body1">Day Spa and Sauna</Typography>
      </Button>
      <Button variant="outlined" sx={{ minWidth: 180, color:"black", background:"lightgrey", borderColor:"lightgrey", boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.4)"}}>
        <Typography variant="body1">Tennis Court</Typography>
      </Button>
      <Button variant="outlined" sx={{ minWidth: 180, color:"black", background:"lightgrey", borderColor:"lightgrey", boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.4)"}}>
        <Typography variant="body1">Tour Desk</Typography>
      </Button>
    </Box>
<Box
  component="img"
  src="https://picsum.photos/seed/psdfficsum/1920/1080"
  alt="Jasper Hotel Preview"
  sx={{
    width: "100%",
    height: "70vh",
    objectFit: "cover",  
    borderRadius: 2,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  }}
/>
 

        <Container sx={{ py: 5 }}>
        <Typography variant="body1" sx={{ mt: 6, textAlign:"center" }}>
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Lorem ipsum dolor sit amet, adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Lorem ipsum dolor sit amet, consectetuer.
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











<Box sx={{display:"flex", justifyContent:"center", width:"100%", mb:10}}>
  <Paper elevation={3} sx={{ p: 4, borderRadius: 3,   
  height: "40vh",
          backgroundImage: "url('https://picsum.photos/seed/picsumddfg/1920/1080')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          
    width:"1170px", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center" }}>
        <Paper sx={{
 p: 4, borderRadius: 3,   
  height: "100%",
          backgroundColor:"#0000007d",
    width:"1170px", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"

        }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom
      sx={{color:"white", p:2}}
      >
        Last Month at Jasper Hotel
      </Typography>


<Box sx={{ position: 'relative', mt: 6 }}>
        {/* Connecting Line */}
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: 0,
            right: 0,
            height: 4,
            backgroundColor: '#1976D2',
            zIndex: 0,
          }}
        />


      <Grid container spacing={14} justifyContent="space-between" alignItems="center"   >
        {achievements.map((item, index) => (
              <Grid item xs={3} key={index} sx={{ textAlign: 'center', zIndex: 1 }}>
                   <Box
                sx={{
                  backgroundColor: 'white',
                  color: '#1976D2',
                  borderRadius: '50%',
                  width: 160,
                  height: 160,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  fontSize: "4rem",
                  fontWeight: '400',
                }}
              >  {item.value}
              </Box>
         
           
            <Typography variant="subtitle1"  mt={3} color="white" sx={{fontSize:"1.1rem", pb:2}}>
              {item.label}
            </Typography>


             
          </Grid>
        ))}
      </Grid>
      </Box>
      </Paper>
    </Paper>
</Box>




    </>
  );
};

export default Templ;
