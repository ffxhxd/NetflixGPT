import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addUpcoming } from "../Utils/Redux/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    upComingMovies();
  });
};

export default useUpcomingMovies;
