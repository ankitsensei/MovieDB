import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('Batman');

  const getMovieData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=2d5a1d48`); // Use 's' for multiple movies
      setMovies(response.data.Search || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  const searchMovie = () => {
    getMovieData();
  };

  return (
    <div className="bg-zinc-900 w-full h-full text-white">
      <div className="flex justify-center pb-20 pt-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='text-black w-96 h-10 py-2'
        />
        <button
          className='bg-red-600 w-24 h-10 hover:bg-red-700'
          onClick={searchMovie}
        >
          Search
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="movie-list flex w-full justify-center gap-20 flex-wrap">
          {movies.length > 0 ? (
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
