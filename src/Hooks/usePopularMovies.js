import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../Utils/Redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    fetchPopular();
  }, []);
};

export default usePopularMovies;
