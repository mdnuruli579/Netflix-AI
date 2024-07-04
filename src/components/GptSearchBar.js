import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstant';
import openAI from '../utils/openAI';
import addGptMovieResult from '../utils/gptSlice'
import { API_OPTIONS } from '../utils/constant';
import { searchMovieTMDB } from '../utils/movie';

const GptSearchBar = () => {

    const langKey=useSelector((store)=>store.config.lang);
    const searchText=useRef(null);
    const dispatch=useDispatch();
    const handleGptSearchClick= async()=>{
      const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      try {
        const gptResults = await openAI.chat.completions.create({
          messages: [{ role: "user", content: gptQuery }],
          model: "gpt-3.5-turbo",
        });
        if (!gptResults.choices) {
        }
    
        console.log(gptResults.choices?.[0]?.message?.content);
    
        // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        console.log(gptMovies);
        // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
    
        // For each movie I will search TMDB API
    
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // [Promise, Promise, Promise, Promise, Promise]
    
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(
          addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
        );
        //console.log(tmdbResults);
      } catch (err) {
        alert(err.error.code);
      }
    }
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
    <form
      className="w-full md:w-1/2 bg-black grid grid-cols-12"
      onSubmit={(e)=>e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        className=" p-4 m-4 col-span-9"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button
        className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearchClick}
      >
        {lang[langKey].search}
      </button>
    </form>
  </div>
  )
}
export default GptSearchBar