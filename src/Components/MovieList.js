import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar overflow-y-hidden">
        <div className="flex gap-2 cursor-pointer">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
