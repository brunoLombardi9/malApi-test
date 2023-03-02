import { Box, Typography } from "@mui/material";
import Image from "mui-image";
import React from "react";

const Card = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        width: "200px",
        height:"350px"
      }}
    >
      <Image
        src={item.coverImage.large}
        alt={item.title.romaji}
        style={{ width: "200px", height: "300px", borderRadius:"10px", marginBottom:"auto" }}
        duration={1100}
        showLoading={true}
      />

      <Typography textAlign="center">{item.title.romaji}</Typography>
    </Box>
  );
};

export default Card;
