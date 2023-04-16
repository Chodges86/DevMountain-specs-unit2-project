import React from "react";

import "./MovieCard.css";

const MovieCard = (props) => {
  const { list, movie, addMovie, removeMovie } = props;
  const inWatchList = list.filter((mov) => {
    return mov.id === movie.id;
  });
  // console.log(inWatchList)

  const button =
    inWatchList.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove from List</button>
    );
  console.log(list)

  return (
    <div className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
