import { useLazyQuery } from "@apollo/client";
import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SearchMediaQuery } from "../utilities/queries";
import Card from "./Card";
import Loading from "./Loading";

const Results = ({ title, page, type, search, changePage }) => {
  const [results, setResults] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const handleChangePage = changePage;
  const [searchMedia, queryData] = useLazyQuery(SearchMediaQuery);

  useEffect(() => {
    if (title === "") return;
    searchMedia({ variables: { search: title, page: 1, type: type } });
  }, [search]);

  useEffect(() => {
    if (!queryData.data) return;
    setResults((prev) => (prev = queryData.data.Page.media));
    setHasNextPage((prev) => (prev = queryData.data.Page.pageInfo.hasNextPage));
  }, [queryData.data]);

  useEffect(() => {
    if (!queryData.data) return;
    console.log(title, page, type);
    setResults([]);
    searchMedia({ variables: { search: title, page: page, type: type } });
  }, [page]);

  console.log(results);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      {queryData.loading && <Loading />}
      {results.length > 0 && !queryData.loading && (
        <>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            gap={4}
          >
            {results.map((item) => (
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
              onClick={() => handleChangePage("down")}
              sx={{ width: "100px" }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              disabled={!hasNextPage}
              onClick={() => handleChangePage("up")}
              sx={{ width: "100px" }}
            >
              Next
            </Button>
          </Box>
        </>
      )}
    </Grid>
  );
};

export default Results;
