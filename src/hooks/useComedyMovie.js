import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addComedyMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const useComedyMovie=()=>{
  const dispatch=useDispatch();
  const comedyMovies = useSelector(
    (store) => store.movies.comedyMovies
  );
  const getComedyMovie= async()=>{
  const data=await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=35', API_OPTIONS);
  const json=await data.json();
  //console.log(json.results);
  dispatch(addComedyMovies(json.results))
  }
  useEffect(()=>{
    !comedyMovies && getComedyMovie();
  },[]);
}
export default useComedyMovie;