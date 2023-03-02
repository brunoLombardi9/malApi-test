import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" height="60vh">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="auto"
        mb="auto"
      >
        <CircularProgress />

        <Typography textAlign="center" variant="h5" mt="10px">
          Loading...
        </Typography>
      </Box>
    </Grid>
  );
};

export default Loading;
