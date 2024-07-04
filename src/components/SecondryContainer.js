import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies &&
    (
      <div className="bg-black mr-0px">
        <div className=" mt-0 md:-mt-51 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trandingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          <MovieList title={"Horror"} movies={movies.horrorMovies} />
          <MovieList title={"Comedy"} movies={movies.comedyMovies} />
        </div>
      </div>
    )
  )
}

export default SecondryContainer