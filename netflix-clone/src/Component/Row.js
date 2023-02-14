import React from "react";
import { useState, useEffect } from "react";
// default import : we can rename
import axios from "../axios";
import "../Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]); // passing an empty array as initial value
  const [trailerURL, setTrailerURL] = useState("");
  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // Making a request on initial render of the component only once
    // if [] ,run once when the component row loads and dont run again
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request?.data?.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  // console.table(movies);
  // console.table(isLargeRow + " " + title);
  return (
    <>
      <div className="row">
        {/** Title */}
        <h2>{title}</h2>
        {/** Container -> poster -> each films */}
        <div className="row_posters">
          {/**several row__poster(s) */}
          {movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`poster ${isLargeRow && "row_poster_large"}`}
              src={`${base_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
      {/* only show youtube video when we have trailerURL */}
      {trailerURL && <Youtube videoId={trailerURL} opts={opts} />}
    </>
  );
}

export default Row;
