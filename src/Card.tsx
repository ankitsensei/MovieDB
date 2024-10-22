import React from 'react';

const Card = ({ movieData }) => {
    const { Poster, Title, imdbID, Actors, Genre, Country, Director,  } = movieData;

    return (
        <div className='flex justify-center items-center gap-20 w-full h-screen'>
            <img src={Poster} alt="poster" className='rounded-3xl' />
            <div className='flex flex-col gap-3'>
                <p className='text-5xl font-bold text-red-600'>{Title}</p>
                <p> <span className='font-bold text-red-600'>Genre: </span>{Genre}</p>
                <p> <span className='font-bold text-red-600'>IMDB ID: </span> {imdbID}</p>
                <p> <span className='font-bold text-red-600'>Actors: </span> {Actors}</p>
                <p> <span className='font-bold text-red-600'>Country: </span>{Country}</p>
                <p> <span className='font-bold text-red-600'>Director: </span>{Director}</p>
            </div>

        </div>
    );  
};

export default Card;
