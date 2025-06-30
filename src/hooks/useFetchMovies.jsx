import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useFetchMovies = function () {
  const dispatch = useDispatch();
  const fetchNowplayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      OPTIONS
    );
    const data = await response.json();
    // console.log(data);
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    fetchNowplayingMovies();
  });
};

export default useFetchMovies;
