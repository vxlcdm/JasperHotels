import React from "react";
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
 

function Temp2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
    <Box
      sx={{
        mt:30,
        backgroundColor: isMobile ? theme.palette.grey[200] : theme.palette.primary.main,
        padding:isMobile? "100px":theme.spacing(3),
        color: isMobile ? "black" : "white",
      }}
    >
        <Typography variant="body1" color="initial">


      {isMobile ? "Mobile View" : "Desktop View"}
        </Typography>
    </Box>

<Box>
    HELO WORLD
</Box>

 </> );
}

export default Temp2;
