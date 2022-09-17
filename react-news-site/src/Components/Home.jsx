import React from "react";
import NewsData from "./NewsData";
import Pagination from "./Pagination";
import Search from "./Search";

const Home = () => {
  return (
    <div className="home-div">
      <h1>My News Site</h1>
      <Search />
      <Pagination />
      <NewsData />
    </div>
  );
};

export default Home;
