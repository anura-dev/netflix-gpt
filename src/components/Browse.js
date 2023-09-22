import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  const getNowPlayingMovies = useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

      {/*
          MainContainer
            - Video Background
            - Video Title
          SecondaryContainer
            - MovieList * n
              - cards * n
  
    */}
    </div>
  )
}

export default Browse
