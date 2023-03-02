import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useApolloClient, useLazyQuery } from "@apollo/client";
import { SearchMediaQuery } from "../utilities/queries";

const SearchInput = () => {
  const inputRef = useRef();
  const client = useApolloClient();
  const [searchMedia, { loading, error, data }] =
    useLazyQuery(SearchMediaQuery);

  function buttonHandler(e) {
    e.preventDefault();

    const title = inputRef.current.value;

    searchMedia({ variables: { search: title } });
  }

  console.log(data);

  return (
    <Grid container sx={{ marginTop: "10px" }}>
      <Box
        component="form"
        onSubmit={buttonHandler}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "10px",
        }}
        gap={2}
      >
        <TextField inputRef={inputRef} />
        <Button variant="contained" type="submit">
          <SearchIcon />
        </Button>
      </Box>
    </Grid>
  );
};

export default SearchInput;
