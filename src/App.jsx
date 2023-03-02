import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import SearchInput from "./components/SearchInput";

const App = () => {
  return (
    <>
      <Navbar />
      <SearchInput/>
      <Results />
    </>
  );
};

export default App;
