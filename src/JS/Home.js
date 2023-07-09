import React, { useState, useEffect } from "react";

import "../CSS/Home.css";
import "../JS/Song";

import Sidebar from "./Sidebar";
import Hollywood from "./Hollywood";
import NorthIndia from "./NorthIndia";
import Navbar from "./Navbar";
import SouthIndia from "./SouthIndia";

const Home = () => {
  const [search, setSearch] = useState("");

  const [container, setContainer] = useState([]);
  const [show, setshow] = useState(false);

  useEffect(() => {
    fetchApi();
  }, [search]);
  const fetchApi = () => {
    fetch(
      "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"
    );
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=+${search}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "24d87c3e7fmshcd2f1f1625659c5p12eb66jsn76a1e6dca6df",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const result = [
          ...new Map(data.data.map((user) => [user.title, user])).values(),
        ];
        setContainer(result);
        // console.log(setContainer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onchangeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="home">
      <Sidebar show={show} setshow={setshow} />
      <div className="cont">
        <Navbar
          show={show}
          search={search}
          onchangeHandler={onchangeHandler}
          container={container}
        />
        <div className="singer">
          <div className="browse">Browse All</div>
          <div className="grid">
            <Hollywood />
          </div>
          <div className="southindia">South India</div>
          <div className="grid">
            <SouthIndia />
          </div>
          <div className="northIndia">North India</div>
          <div className="grid">
            <NorthIndia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
