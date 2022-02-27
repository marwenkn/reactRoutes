import React from 'react'
import MovieCard from './MovieCard';

const MoviesList = ({movies, name, rate}) => {
    return (
        <div className="movies">
            {movies.filter((elToFilter) => elToFilter.rate >= rate && elToFilter.title.toLowerCase().includes(name.toLowerCase())).map((movie) => <MovieCard movie={movie} /> )}
        </div>
    )
}

export default MoviesList
