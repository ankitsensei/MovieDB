import React from 'react';

const Card = ({ movieData }) => {
    const { Poster, Title, Type, Year, imdbID} = movieData;

    return (
        <div className='flex flex-col w-[250px] gap-2'>
            <img src={Poster} alt="poster" className='rounded-3xl h-96 w-auto' />
            <div className='flex flex-col gap-2'>
                <p className='text-2xl font-bold text-red-600'>{Title}</p>
                <div className='flex flex-col border-2 border-red-600 border-opacity-35 rounded-2xl p-2'>
                    <p> <span className='font-bold text-red-600'>Type: </span> {Type}</p>
                    <p> <span className='font-bold text-red-600'>Year: </span> {Year}</p>
                    <p> <span className='font-bold text-red-600'>IMDB ID: </span> {imdbID}</p>
                </div>
            </div>
        </div>
    );  
};

export default Card;
