import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_ANIME } from "../utilities/queries";
import { Grid } from "@mui/material";

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [type, setType] = useState("ANIME");
  const [year, setYear] = useState("");
  const [genres, setGenres] = useState([]);
  const [format, setFormat] = useState("");
  const [status, setStatus] = useState("");

  const [searchAnime, { loading, error, data }] = useLazyQuery(SEARCH_ANIME);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  const handlePerPageChange = (e) => {
    setPage(1);
    setPerPage(Number(e.target.value));
  };

  const changeType = (e) => {
    const mediaType = e.target.value;
    if (type === mediaType) return;
    setType(mediaType);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchAnime({
      variables: {
        searchTerm,
        page,
        perPage,
        type,
      },
    });
    setPage(1);
  };

  return (
    <Grid>
      <SearchBar
        searchTerm={searchTerm}
        onInputChange={handleInputChange}
        onTypeChange={changeType}
        type={type}
        onSearch={handleSearch}
      />
      <Results
        loading={loading}
        error={error}
        data={data}
        page={page}
        perPage={perPage}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
      />
    </Grid>
  );
};

export default SearchContainer;
