import { useState } from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";

const SearchContainer = () => {
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("ANIME");
  const [search, setSearch] = useState(false);

  const saveSearchBarDataParameters = (titleName, actualType) => {
    setTitle((prev) => (prev = titleName));
    setPage((prev) => (prev = 1));
    setType((prev) => (prev = actualType));
    setSearch((prev) => (prev = false));
  };

  const dispatchSearch = () => {
    setSearch((prev) => (prev = true));
  };

  const handleChangePage = (upOrDown) => {
    upOrDown === "up" && setPage((prev) => prev + 1);
    upOrDown === "down" && setPage((prev) => prev - 1);
  };

  const changeType = () => {
    type === "ANIME"
      ? setType((prev) => (prev = "MANGA"))
      : setType((prev) => (prev = "ANIME"));
  };

  return (
    <>
      <SearchBar
        onInputChange={saveSearchBarDataParameters}
        activateSearch={dispatchSearch}
        changeType={changeType}
        search={search}
        type={type}
      />
      <Results
        title={title}
        page={page}
        type={type}
        search={search}
        changePage={handleChangePage}
      />
    </>
  );
};

export default SearchContainer;
