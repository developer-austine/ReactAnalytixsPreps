import React from 'react';

const MovieList = ({ movie }) => {
  return (
    <div>
        {movie.length === 0 ? (
            <h2>No movies available.</h2>
          ) : (
        <div>
            {movie.map(({ id, title, year, isWatched}) => (
                <div key={ id }>
                    <h1>Title: { title }</h1>
                    <h2>Year: { year }</h2>
                    <p>Status: {isWatched ? "✅ true" : "⏳ Pending"}</p>
                    <h3>-------------------------------------------------</h3>
                </div>
            ))}
        </div>
          )}
    </div>
  )
}

export default MovieList