import { useQuery } from "@apollo/client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { TopMediaQuery } from "../utilities/queries";
import Card from "./Card";
import Loading from "./Loading";

const Results = () => {
  const [page, setPage] = useState(1);
  const [type, setType] = useState("ANIME");

  const { data, error, loading } = useQuery(TopMediaQuery, {
    variables: { type, page },
  });

  function changeType() {
    setPage((prev) => (prev = 1));

    type === "ANIME"
      ? setType((prev) => (prev = "MANGA"))
      : setType((prev) => (prev = "ANIME"));
  }

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  const media = data.Page.media;

  return (  
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Typography textAlign="center" mx="auto" sx={{ width: "100%" }}>
        Top {type} List
      </Typography>

      <Button onClick={changeType}>Change Type</Button>

      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        gap={4}
      >
        {media.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
          width: "250px",
        }}
      >
        <Button
          variant="contained"
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
          sx={{ width: "100px" }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          disabled={!data.Page.pageInfo.hasNextPage}
          onClick={() => setPage((prev) => prev + 1)}
          sx={{ width: "100px" }}
        >
          Next
        </Button>
      </Box>
    </Grid>
  );
};

export default Results;
