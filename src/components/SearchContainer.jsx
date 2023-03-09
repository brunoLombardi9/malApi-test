import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_TOP_ANIME, SEARCH_ANIME } from "../utilities/queries";
import { Grid } from "@mui/material";

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [type, setType] = useState("ANIME");
  const [year, setYear] = useState("");
  const [genres, setGenres] = useState([]);
  const [format, setFormat] = useState("");
  const [status, setStatus] = useState("");

  const topData = useQuery(GET_TOP_ANIME);
  const [searchAnime, queryData] = useLazyQuery(SEARCH_ANIME, {
    variables: type,
  });

  useEffect(() => {
    setInfo(queryData);
  }, [queryData]);

  useEffect(() => {
    setInfo(topData);
  }, [topData]);

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
        loading={info.loading}
        error={info.error}
        data={info.data}
        page={page}
        perPage={perPage}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
      />
    </Grid>
  );
};

export default SearchContainer;
