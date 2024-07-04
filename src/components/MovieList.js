import React from 'react'
import MovieCard from './MovieCard'
const customCSS = `
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  scrollbar-width: none;
}
`;
const MovieList = ({title,movies}) => {
  return (
    <>
    <style>{customCSS}</style>
    <div className="px-6 ">
    <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
    <div className="flex overflow-x-auto hide-scrollbar">
      <div className="flex">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  </div>
  </>
  )
}

export default MovieList