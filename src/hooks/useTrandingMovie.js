import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrandingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const useTrandingMovie=()=>{
  const dispatch=useDispatch();
  const trandingMovies = useSelector(
    (store) => store.movies.trandingMovies
  );
  const getTrandingMovie= async()=>{
  const data=await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS);
  const json=await data.json();
  //console.log(json.results);
  dispatch(addTrandingMovies(json.results))
  }
  useEffect(()=>{
    !trandingMovies && getTrandingMovie();
    // getTrandingMovie();
  },[]);
}
export default useTrandingMovie;