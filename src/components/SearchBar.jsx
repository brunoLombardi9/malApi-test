import {
  Box,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";
import { types, years } from "../utilities/searchOptions";

const SearchBar = ({
  searchTerm,
  onInputChange,
  onTypeChange,
  type,
  onSearch,
}) => {
  return (
    <Box
      component="form"
      onSubmit={onSearch}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <TextField type="text" value={searchTerm} onChange={onInputChange} />

      <ToggleButtonGroup
        color="primary"
        value={type}
        exclusive
        onChange={onTypeChange}
        aria-label="Platform"
      >
        {types.map((t) => (
          <ToggleButton key={t} value={t}>
            {t}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
