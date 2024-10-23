import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const App = () => {
  const [movies, setMovies] = useState(["ninja"]); // Store an array of movies
  const [loading, setLoading] = useState(true); // Loading state

  const getMovieData = async () => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${movies}&apikey=2d5a1d48`); // Use 's' to search for multiple movies
      setMovies(response.data.Search);
      console.log(response.data)
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="bg-zinc-900 w-full h-full text-white">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="movie-list flex w-full justify-center  gap-20 flex-wrap">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <Card key={movie.imdbID} movieData={movie} /> 
            ))
          ) : (
            <p>No movies found</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default App;
