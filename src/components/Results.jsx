import {
  Box,
  Button,
  FormHelperText,
  Grid,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import React from "react";
import Card from "./Card";
import Loading from "./Loading";

const Results = ({
  loading,
  error,
  data,
  page,
  perPage,
  onPageChange,
  onPerPageChange,
}) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  if (!data || !data.Page || !data.Page.media) {
    return <p>No results found</p>;
  }
  const resultsPerpage = [5, 10, 15];
  const totalPages = Math.ceil(data.Page.media.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const media = data.Page.media.slice(start, end);

  return (
    <Grid
      gap={3}
      container
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Grid
        container
        gap={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {media.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Grid>

      <Box>
        <Pagination
          count={totalPages}
          page={page}
          onChange={onPageChange}
          color="secondary"
        />

        <Select value={perPage} onChange={onPerPageChange} displayEmpty>
          {resultsPerpage.map((r) => (
            <MenuItem key={r} value={r}>
              {r}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Results per page</FormHelperText>
      </Box>
    </Grid>
  );
};

export default Results;
