import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant';

const SecondryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  const langKey=useSelector((store)=>store.config.lang);
  return (
    movies.nowPlayingMovies &&
    (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-50 pl-4 md:pl-12 relative z-20">
          <MovieList title={lang[langKey].NOW_PLAYING} movies={movies.nowPlayingMovies} />
          <MovieList title={lang[langKey].TRANDING} movies={movies.trandingMovies} />
          <MovieList title={lang[langKey].POPULAR} movies={movies.popularMovies} />
          <MovieList
            title={lang[langKey].UPCOM_MOVI}
            movies={movies.upcomingMovies}
          />
          <MovieList title={lang[langKey].HORROR}movies={movies.horrorMovies} />
          <MovieList title={lang[langKey].COMEDY} movies={movies.comedyMovies} />
        </div>
      </div>
    )
  )
}

export default SecondryContainer