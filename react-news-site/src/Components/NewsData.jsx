import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsData = () => {
  const [newsData, setNewsData] = useState([]);

  const API = "http://hn.algolia.com/api/v1/search?query=react";

  const getData = async () => {
    try {
      const { data } = await axios.get(API);
      setNewsData(data);
      console.log(newsData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home-div">
      <h1>My News Site</h1>
    </div>
  );
};

export default NewsData;
