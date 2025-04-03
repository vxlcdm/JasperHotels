import React from "react";
import  '../fonts/Sacramento-Regular.ttf';
import { Box, Typography, TextField, Button, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";





const Footer = () => {
  return (
    <>
    <Box 
    sx={{
    backgroundImage: `url("https://picsum.photos/seed/picsum/1920/1080")`,  // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "40px 20px",
    textAlign: "center",
  }}
    >

      {/* Subscribe Section */}
      <Box sx={{ maxWidth: 600, margin: "0 auto", paddingBottom: 4 }}>
        {/* <img src="/subscribe-image.jpg" alt="Subscribe" style={{ width: "100%", borderRadius: 8 }} /> */}
        <Typography variant="h1" sx={{ mt: 2 ,fontFamily: "Sacramento", color:"white", fontWeight:"500"}}>Stay Updated</Typography>
        <Typography variant="h5" sx={{ mt: 2, mb:2 , color:"black"}}>FOR OUR SPECIALS</Typography>
        <Box sx={{ display: "flex", gap: 5, justifyContent: "center", flexDirection: "column", alignItems:"center" }}>
         <Box sx={ {   display:"flex" ,   gap:0}}>
           <TextField variant="outlined" placeholder="Your Name" sx={{ background: "white", borderRadius: 1,  }} InputProps={{
    sx: { paddingLeft: "100px", paddingY: "2px", fontSize:"1.2rem" } 
  }} />
          <TextField variant="outlined" placeholder="Your Email" sx={{ background: "white", borderRadius: 1 }}  InputProps={{
    sx: { paddingLeft: "100px", paddingY: "2px", fontSize:"1.2rem" } 
  }}/>
         </Box>
          <Button variant="contained" sx={{ backgroundColor: "#FF5722", color: "white", width:"200px", py:"15px", letterSpacing:"2px",
            "&:hover":{
             backgroundColor:"red", 
             transition:"0.3s all ease",
             width:"209px"
            }
           }}>
            Sign Up
            <EmailIcon sx={{ color: "white", fontSize: 25, mx:"10px", display:"flex" }} />
          </Button>
        </Box>
      </Box>



    
    </Box>


<Box sx={{ backgroundColor: "#1E1E1E", color: "white", padding: "40px 20px", textAlign: "center" }}>
     
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        <IconButton color="primary"><FacebookIcon sx={{ color: "white" }} /></IconButton>
        <IconButton color="primary"><TwitterIcon sx={{ color: "white" }} /></IconButton>
        <IconButton color="primary"><InstagramIcon sx={{ color: "white" }} /></IconButton>
      </Box>

    
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 1 }}>
        <Link href="/" color="inherit" underline="none">Home</Link>
        <Link href="/theme" color="inherit" underline="none">Theme</Link>
        <Link href="/contact" color="inherit" underline="none">Contact</Link>
      </Box>

      
      <Typography variant="body2">Jasper Hotels © 2025 | Contact: +123 456 7890</Typography>
      </Box>
</>
  );
};

export default Footer;
