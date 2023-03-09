import { Box, Grid, Typography } from "@mui/material";
import Image from "mui-image";
import React from "react";

const Navbar = () => {
  const menu = ["opcion 1", "mono"];

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        padding: "10px",
      }}
    >
      <Box sx={{ width: "100px" }}>
        <Image src={"/Logo_kamado.png"} duration={0}/>
      </Box>

      <Box gap={3} sx={{ display: "flex" }}>
        {menu.map((option) => {
          return <Typography color={"white"} key={option}>{option}</Typography>;
        })}
      </Box>
    </Grid>
  );
};

export default Navbar;