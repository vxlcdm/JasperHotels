import React, { useEffect } from 'react';
import { useState } from 'react';
import { Typography, Box, Grid,Button } from '@mui/material';
import HotelIcon from "@mui/icons-material/Hotel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Translate } from '@mui/icons-material';




const imagesForSlider = [
  {
    imageDBG: "https://picsum.photos/seed/icsdwe3fgbfvdah/2560/1440",
    titel: "Downtown",
  },
  {
    imageDBG: "https://picsum.photos/seed/icsdwe3fvdadfh/2560/1440",
    titel: "Hinterland",
  },
  {
    imageDBG: "https://picsum.photos/seed/icsdwe3fvddah/2560/1440",
    titel: "Jasper Spa",
  },
  {
    imageDBG: "https://picsum.photos/seed/swcash/2560/1440",
    titel: "Harborside",
  },
];

const infoItems = [
  { title: "Check In", icon: <AccessTimeIcon fontSize="medium" /> },
  { title: "Check Out", icon: <AccessTimeIcon fontSize="medium" /> },
  { title: "Adults", icon: <GroupIcon fontSize="medium" /> },
  { title: "Children", icon: <ChildCareIcon fontSize="medium" /> },
  { title: "Room", icon: <MeetingRoomIcon fontSize="medium" /> }
];






















const  Panel =()=>{
        const [count,setCount]=useState(0);
    const [imageIndex, setImageIndex]=useState(-1);
console.log(imageIndex);
const [isButtonHover, setIsButtonHover] = useState(-1);


const ExpandImage=()=>{

}

        
       useEffect(()=>{
         imagesForSlider.forEach(()=>{
            setCount((prev)=>prev+1);
            
        });

       },[])
            
        
return(<>



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
      Hero Panels
        </Typography>











<Box
sx={{
    display:"flex",
    width:"100%",
        height:"80vh",
        // border:"1px solid red",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",

}}>
    <Grid
    sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
        
        // border:"1px solid red",
        
    }}>
        
    {imagesForSlider.map((item,index)=>{
        return(





        <Grid 
        item
         key={index}
          onMouseEnter={()=> setImageIndex(index) }
            onMouseLeave={() => setImageIndex(null)}
        sx={{
        // border:"4px solid blue",
        height:"100%",
        //   transition: "all 0.5s ease",
       
        backgroundPosition:"center",
        background:`url(${item.imageDBG})`,
        width:1/count*2,
        flex: imageIndex === null? 1.2: imageIndex === index? 1.5: 1.2,
        position:"relative",
        backgroundSize: {
  xs: isButtonHover === index + 1 ? "1230%" : "1200%",
  sm: isButtonHover === index + 1 ? "730%" : "700%",
  md: isButtonHover === index + 1 ? "480%" : "450%",
  lg: isButtonHover === index + 1 ? "380%" : "350%",
  xl: isButtonHover === index + 1 ? "330%" : "300%",
},

        // transition: "background-size 0.5s ease",
        
        transition: "all 0.7s ease",
        backgroundRepeat:"no-repeat",
        }}
        >

{imageIndex ===index &&(<>
<Box sx={{
      height:"100%",
          transition: "all 0.3s ease",
      
     backgroundColor: isButtonHover ? "rgba(122, 248, 255, 0.4)" : "hsla(0, 0%, 0%, 0)",
}}>


     
         
             <Button
        onMouseEnter={() => setIsButtonHover(index+1)}
        onMouseLeave={() => setIsButtonHover(null)}
        sx={{
          px: isButtonHover ? 3 : 2,
          py: 1.5,
          fontSize: {xs:"0.7rem"   ,md:"1rem"},
          backgroundColor: "#1976d2",
          color: "white",
          borderRadius: 3,
          display:"flex",
          justifySelf:"center",
        //   border:"1px solid red",
          alignSelf:"center",
          top:"65%",
          transition: "all 0.3s ease",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#1565c0"
          }
        }}
      >
        {isButtonHover===(index+1) ? "Explore Hotels > " : "Explore Hotels"}
      </Button>
    
            
                 {
                     
                    <Typography
                    sx={{
                        color:"white",
                         fontSize: {xs:"0.8rem"   ,md:"1.5rem"},
                        // bgcolor:"red",
                        p:1,
        backgroundColor: "hsla(0, 0.00%, 0.00%, 0.6)",
                         display:"flex",
          justifySelf:"center",
        //   border:"1px solid red",
          alignSelf:"center",
          position:"absolute",
          top:"55%",
          left:"50%",
          transform: "translate(-50%, -50%)",

                        // top:"50%",
                        textAlign:"center"
                    }}>
{item.titel}
                    </Typography>
                 }


</Box> </>)}
        </Grid>
        )
    })}

</Grid>






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





        





<>
 
    <Box
      sx={{
        textAlign: "center",
        // py: 10,
        // px: 2,
           
        // backgroundColor:  "rgb(122, 248, 255,1)" ,
        transition:"all ease 0.4s",
        position:"absolute",
        top:"40%",
        left:"50%",
        // width:"50%",
        // height:"50%",
           transform: "translate(-50%, -50%)",
        display:"flex",
        // border:"2px solid blue",
        justifyContent:"center",
        // alignItems:"center",
        // zIndex:0,
      }}
    >


        <Box sx={{
            // width:"100%",
            // height:"100%",
            // border:"1px solid red",
             display:"flex",
        // border:"2px solid blue",
        justifyContent:"center",
        flexDirection:'column',
        alignItems:"center",

            
        }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Sacramento', cursive",
          fontSize: "3rem",
          bgcolor:"hsla(10,10%,10%,0.5)",
          color: "white",
        //   mb: 2
        }}
      >
        Welcome to our site
      </Typography>

      

    




    </Box>
   </Box> 
</>




































</Box>
</Box>
</>);
}
export default Panel;



