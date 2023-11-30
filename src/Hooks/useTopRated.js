import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../Utils/Redux/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    topRatedMovies();
  }, []);
};

export default useTopRated;
