import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../store/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      OPTIONS
    );
    const response = await movie.json();

    const filterData = response.results.filter(
      (movie) => movie.name === "Official Trailer"
    );
    const trailer = filterData.length ? filterData[0] : response[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useMovieTrailer;
