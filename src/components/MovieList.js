import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-6'>
        <h1 className='text-xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex'>
                {movies?.map((movieCardData) => {
                    return  <MovieCard key ={movieCardData.id} poster_path ={movieCardData?.poster_path}/>
                })}
            
            </div>
        </div>
    </div>
  )
}

export default MovieList