import React from  'react';
import { Box, Typography, Grid, Container, Button,     Card, CardContent, CardMedia,  } from "@mui/material";
import { SM } from './../../node_modules/country-flag-icons/modules/react/1x1/index';
 
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
    content: "Perfectly cooked salmon with a lemon garlic butter sauce served with seasonal vegetables.",
    image: "https://demo.klayemorrison.com/jasper-hotel/preview/500x300-6.jpg",
  },
  {
    title: "Italian Pasta",
    content: "Classic spaghetti tossed with rich tomato sauce, fresh herbs, and parmesan cheese.",
    image: "https://demo.klayemorrison.com/jasper-hotel/preview/500x300-6.jpg",
  },
  {
    title: "Dessert Platter",
    content: "An assortment of cakes, tarts, and chocolate delights for the perfect sweet ending.",
    image: "https://demo.klayemorrison.com/jasper-hotel/preview/500x300-6.jpg",
  },
];




const ExpAccRes=()=>{






    return(<>
    

      
       <Container sx={{ py: 5, maxWidth:"1400px",
        
        }}>
      <Grid container spacing={0} justifyContent="center"
      sx={{ 
        // border:"1px solid red"
        }}
      >
        
      <Grid item xs={4} sm={3} md={3} lg={3} xl={3}
      sx={{
        
        // border:"5px solid black",
        width:"30%",

        "&:hover img":{
          cursor:"pointer",
           transform: "scale(1.2)",  
      transition: "transform 0.3s ease-in-out",
      
        }
      }}
      >
       <Box sx={{ position: "relative", display: "inline-block", maxWidth: "100%", overflow:"hidden" }}>
      
      <Box
        component="img"
       src="https://picsum.photos/id/299/370/300"
        alt="Beach Resort"
        sx={{ maxWidth: "100%", borderRadius: 0, display: "block",
           
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
          fontSize: "1.1rem",
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


































      
       <Grid item xs={4} sm={3} md={3} lg={3} xl={3}
      sx={{
        
       

        
        //  border:"5px solid black",
        width:"30%",

       
        "&:hover img":{
          cursor:"pointer",
           transform: "scale(1.2)",  
      transition: "transform 0.3s ease-in-out",
      
        }
      }}
      >
       <Box sx={{ position: "relative", display: "inline-block", maxWidth: "100%"  ,overflow:"hidden" }}>
    
      <Box
        component="img"
        src="https://picsum.photos/id/381/370/300"
        alt="Beach Resort"
        sx={{ maxWidth: "100%", borderRadius: 0, display: "block" }}
      />
      
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.1rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)", //  
          padding: "8px 16px",
          borderRadius: "5px",
        }}
            >
           ACCOMMODATION
          </Typography>
           </Box>
          </Grid>

         <Grid item xs={4} sm={3} md={3} lg={3} xl={3}
      sx={{
        
        //  border:"5px solid black",
        width:"30%",


        
        "&:hover img":{
          cursor:"pointer",
           transform: "scale(1.2)",  
      transition: "transform 0.3s ease-in-out",
      
        }
      }}
      >
       <Box sx={{ position: "relative", display: "inline-block", maxWidth: "100%", overflow:"hidden" }}>
    
      <Box
        component="img"
       src="https://picsum.photos/id/249/370/300"
        alt="Beach Resort"
        sx={{ maxWidth: "100%", borderRadius: 0, display: "block" }}
      />
     
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.1rem",
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
      gap={4}
      flexWrap="wrap"
      sx={{ mt: 0 }}
    >
      {roomTitles.map((title, index) => (
        <Typography
          key={index}
          variant="h6"
          sx={{
            cursor: "pointer",
            color: "black",
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid red",
    width:"100%"
  }}
> 
  <Box sx={{ display: "flex", gap: 2,  mt: 4, mb:4 ,
    width:"90%",
    // border: "1px solid red",
    justifyContent: "center",
    alignItems: "center",

  }}>
      {dishData.map((dish, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            width: 1 / 3.6,
            minWidth: 100,
            boxShadow: 3,
              overflow:"hidden",
            transition: "transform 0.3s ease",
            "&:hover img": {
              transform: "scale(1.25)",
            },
          }}
        >
          <CardMedia
            component="img"
            image={dish.image}
            alt={dish.title}
            sx={{
              width: "220px",
            //   height: "100%",
              overflow:"hidden",
              transition: "transform 0.3s ease",
              

            }}
          />
          <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h6" >
              {dish.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {dish.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    </Box>
    </>






    </>);
};
export default ExpAccRes;