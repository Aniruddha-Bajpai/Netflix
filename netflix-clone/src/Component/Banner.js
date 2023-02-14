import React from "react";
import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "../Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchDate() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let indx = Math.floor(Math.random() * request.data.results.length - 1);
      // console.log();
      setMovie(request.data.results[indx]);
    }
    fetchDate();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " . . ." : str;
  }
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* background-image */}
      <div className="banner_content">
        {/* Title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className="btn">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
