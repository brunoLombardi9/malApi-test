import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({
  onInputChange,
  activateSearch,
  search,
  type,
  changeType,
}) => {
  const inputRef = useRef();
  const saveData = onInputChange;
  const handleChangeType = changeType;
  const setSearch = activateSearch;

  useEffect(() => {
    if (!search) return;
    const title = inputRef.current.value;
    saveData(title, type);
  }, [search]);

  function formHandler(e) {
    e.preventDefault();
    setSearch();
  }

  return (
    <Grid container sx={{ marginTop: "10px" }}>
      <Box
        component="form"
        onSubmit={formHandler}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "10px",
        }}
        gap={2}
      >
        <TextField inputRef={inputRef} required />
        <Button variant="contained" type="submit">
          <SearchIcon />
        </Button>
      </Box>
      <Button onClick={handleChangeType}>Change Type, now seeing {type}</Button>
    </Grid>
  );
};

export default SearchBar;
