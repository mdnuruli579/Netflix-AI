import { useDispatch ,useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addHorrorMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const useHorrorMovie=()=>{
  const dispatch=useDispatch();
  const horrorMovies = useSelector(
    (store) => store.movies.horrorMovies
  );
  const getHorrorMovie= async()=>{
  const data=await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=27', API_OPTIONS);
  const json=await data.json();
  //console.log(json.results);
  dispatch(addHorrorMovies(json.results))
  }
  useEffect(()=>{
    !horrorMovies && getHorrorMovie();
  },[]);
}
export default useHorrorMovie;