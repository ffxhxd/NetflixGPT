import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 h-48">
      <img alt="movie-poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
