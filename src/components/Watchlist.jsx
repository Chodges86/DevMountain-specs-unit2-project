import React from "react";
import MovieCard from "./MovieCard";

import './Watchlist.css'

const Watchlist = (props) => {
  const { list, removeMovie } = props;

  const movieDispay = list.map((movie, index) => {
    return <MovieCard key={movie.id} list={list} movie={movie} removeMovie={removeMovie}>{movie.original_title}</MovieCard>
})

  return (
    <div className="watchlsit">
      <h1>My Watchlist</h1>
      <h3>Movies in your watchlist</h3>
      <div className="movie-container">{movieDispay}</div>
    </div>
  );
};

export default Watchlist;
