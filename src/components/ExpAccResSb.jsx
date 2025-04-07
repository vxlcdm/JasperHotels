import React from  'react';
import { Box, Typography, Grid, Container, Button, TextField,    Card, CardContent, CardMedia, ListItem,  } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SM } from '../../node_modules/country-flag-icons/modules/react/1x1/index';
//  import { useState } from 'react';
const roomTitles = [
  "Standard Room",
  "Deluxe Room",
  "Fam Apart",
  "Junior Suite",
  "Penthouse Suite",
];


const dishData = [
  {
    title: "Grilled Salmon",
    content: "Perfectly cooked salmon with a lemon garlic butter sauce served with.",
    image: "https://demo.klayemorrison.com/jasper-hotel/preview/500x300-6.jpg",
  },
  {
    title: "Italian Pasta",
    content: "Classic spaghetti tossed with rich  sauce, fresh , and parmesan cheese.",
    image: "https://demo.klayemorrison.com/jasper-hotel/preview/500x300-6.jpg",
  },
  {
    title: "Dessert Platter",
    content: "An assortment of cakes,  and chocolate delights for the perfect sweet.",
    image: "https://demo.klayemorrison.com/jasper-hotel/preview/500x300-6.jpg",
  },
];


const dataItemforMenu=[
  {label:"Home"},
  {label:"Theme"},
  {label:"Contact"},
  {label:"+91 758-392-0475"},
]

const ExpAccRes=()=>{




  


    return(<>
    <Box sx={{
        maxWidth:"250px",
        // border:"1px solid red"
    }}>

   

      
       <Container sx={{ py: 5,
        
        }}>
      <Grid container spacing={0} justifyContent="center"
      sx={{ 
        // border:"1px solid red"
        display:"flex",
        flexDirection:'column',
        height:"300px",
        }}
      >
        
      <Grid  
      sx={{
        
        // border:"5px solid black",
        width:"100%",
        height:"100px",


        "&:hover img":{
          cursor:"pointer",
           transform: "scale(1.2)",  
      transition: "transform 0.3s ease-in-out",
      
        }
      }}
      >
       <Box sx={{ position: "relative", display: "inline-block", maxWidth: "100%", overflow:"hidden" ,
        width:"100%",
        height:"100px",

       }}>
      
      <Box
        component="img"
       src="https://picsum.photos/id/299/370/300"
        alt="Beach Resort"
        sx={{ maxWidth: "100%", borderRadius: 0, display: "block",
        height:"100px",
        width:"100%",


           
          }}
      />
     
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          fontSize: "0.7rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)", //  
          padding: "8px 16px",
          borderRadius: "5px",
          textAlign:"center"
        }}
            >
           EXPLORE HOTEL
          </Typography>
           </Box>
          </Grid>












      
       <Grid  
      sx={{
        
       

        
        //  border:"5px solid black",
        // width:"100%",
        // height:"150px",
         width:"100%",
        height:"100px",


       
        "&:hover img":{
          cursor:"pointer",
           transform: "scale(1.2)",  
      transition: "transform 0.3s ease-in-out",
      
        }
      }}
      >
       <Box sx={{ position: "relative", display: "inline-block", maxWidth: "100%"  ,overflow:"hidden" ,
         width:"100%",
        height:"100px",
       }}>
    
      <Box
        component="img"
        src="https://picsum.photos/id/381/370/300"
        alt="Beach Resort"
        sx={{ maxWidth: "100%", borderRadius: 0, display: "block" ,
           width:"100%",
        height:"100px",
        }}
      />
      
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          fontSize: "0.7rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)", //  
          padding: "8px 16px",
          borderRadius: "5px",
        }}
            >
           ACCOMMODATION
          </Typography>
           </Box>
          </Grid>

         <Grid  
      sx={{
        
        //  border:"5px solid black",
        // height:"150px",
        // height:"50%",
        width:"100%",
        height:"100px",
        
        "&:hover img":{
          cursor:"pointer",
           transform: "scale(1.2)",  
      transition: "transform 0.3s ease-in-out",
      
        }
      }}
      >
       <Box sx={{ position: "relative", display: "inline-block", maxWidth: "100%", overflow:"hidden",
         width:"100%",
        height:"100px",
        }}>
    
      <Box
        component="img"
       src="https://picsum.photos/id/249/370/300"
        alt="Beach Resort"
        sx={{ maxWidth: "100%", borderRadius: 0, display: "block",
           width:"100%",
          height:"100px",
         }}
      />
     
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          fontSize: "0.7rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)", //  
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



<>
  <Box
      display="flex"
      justifyContent="center"
      gap={1}
      // flexWrap="wrap"
      sx={{ mb: 4, 
        flexDirection:"column",
        textAlign:"center",
      }}
    >
      {roomTitles.map((title, index) => (
        <Typography
          key={index}
          variant="h6"
          sx={{
            cursor: "pointer",
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "primary.main",
              transform: "scale(1.1)",
            },
          }}
        >
          {title}
        </Typography>
      ))}
    </Box>
</>



<>
<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid red",
    width:"100%",
    // height:"100px",
  }}
> 
  <Box sx={{ display: "flex", gap: 2,  mt: 4, mb:4 ,
            flexDirection:"column",

    width:"100%",
    // border: "1px solid red",
    justifyContent: "center",
    alignItems: "center",

  }}>
      {dishData.map((dish, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection:"column",
            width: 1 / 1,
            minWidth: 100,
            height:"140px",
            boxShadow: 3,
              overflow:"hidden",
            transition: "all 0.6s ease",
            "&:hover":{
            cursor: "pointer",

               bgcolor:"lightblue",
            },
            "&:hover img": {
            cursor: "pointer",

              transform: "scale(1.10)",
             
            },
          }}
        >
          <CardMedia
            component="img"
            image={dish.image}
            alt={dish.title}
            sx={{
              // width: "220px",
              height: "200px",
              overflow:"hidden",
              transition: "transform 0.3s ease",
            }}
          />
          <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center",
            p:0,
            px:1,
              m:0,
           }}>
            <Typography variant="h6" sx={{
              fontSize:"0.9rem",
              p:0,
              m:0,

            }}>
              {dish.title}
            </Typography>
            <Typography variant="body2" color="text.secondary"
            sx={{
              fontSize:"0.7rem",
              p:0,
              m:0,

            }}>
              {dish.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    </Box>
    </>







<Box sx={{
  width:"100%",
  // border:"1px solid red",
  textAlign:"center",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  alignContent:"center",
  justifyItems:"center",
  justifyContent:"center",
}}>
  {dataItemforMenu.map((item, )=>{
    return(
      <ListItem sx={{
    // textAlign:"center",
    // display:"flex",
    // alignItems:"center",
    fontFamily:"sans-serif",
  // alignContent:"center",
  // justifyItems:"center",
  justifyContent:"center",
    // alignItems:"center",
    border:"1px solid lightblue",
    bgcolor:"white",


      }}>
        {item.label}
      </ListItem>
    )
  })}
</Box>












 <Box
          sx={{
            // position: "absolute",
            // top: "25%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
            bgcolor: "lightblue",
            boxShadow: 24,
            // p: 4,
            // px:60,
            // borderRadius: 2,
            minWidth: 100,
            // width:"80%",
            display:'flex',
            // border:"1px solid red",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",

          }}
        >
          <Box sx={{
                 display:'flex',
            // border:"1px solid red",
            // flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            // width:"30%",

          }}>
            <TextField
      label="WHAT ARE YOU LOOKING FOR? "
      fontSize="0.7rem"
      variant="standard"
      sx={{
        width:"100%",
        border:"none",
        fontSize:"0.7rem",
        outline:"none",
        p:0,
        mb:3,
      }}
      margin="normal"
    /> <SearchIcon/>
          </Box>

          
        </Box>









 </Box>
    </>);
};
export default ExpAccRes;