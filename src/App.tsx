import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const App = () => {
  const [data, setData] = useState(null);

  const getMovieData = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?t={iron+man}&apikey=2d5a1d48`);
      setData(response.data); 
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="bg-zinc-900 w-full h-screen text-white">
      {data ? (
        <Card movieData={data} />
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
};

export default App;
