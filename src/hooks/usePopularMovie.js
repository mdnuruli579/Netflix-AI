import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const usePopularMovie=()=>{
  const dispatch=useDispatch();
  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );
  const getPopularMovie= async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
  const json=await data.json();
  //console.log(json.results);
  dispatch(addPopularMovies(json.results))
  }
  useEffect(()=>{
    !popularMovies && getPopularMovie();
    // getPopularMovie();
  },[]);
}
export default usePopularMovie;