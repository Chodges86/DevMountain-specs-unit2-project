import React from "react";

import MovieCard from "./MovieCard";
import './MovieScreen.css'

const MovieScreen = props => {
    const { list, page, setPage, movieList, addMovie, removeMovie } = props

    const decrement = () => {
        setPage((prevPage) => prevPage - 1)
    }

    const increment = () => {
        setPage((prevPage) => prevPage + 1)
    }

    const movieDispay = movieList.map((movie, index) => {
        return <MovieCard key={movie.id} list={list} movie={movie} addMovie={addMovie} removeMovie={removeMovie}>{movie.original_title}</MovieCard>
    })
    return (
        <div className="page">
            <h1>Caleb's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="btn-container">
                {page !== 1 && <button onClick={decrement}>Previous</button>}
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">{movieDispay}</div>
        </div>
    )
};

export default MovieScreen