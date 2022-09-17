import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsData = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://hn.algolia.com/api/v1/search?query=react")
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
