import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    const movieByName=useSelector((store)=>store.movies?.movieByName);
    if(!movies)return;
    const mainMovie=movies[0];
    console.log(movieByName);
    const {original_title,overview,id}=mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview}/>
        {
          movieByName &&(<MovieList title={"Search Result"} movies={movieByName}/>)
        }
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer