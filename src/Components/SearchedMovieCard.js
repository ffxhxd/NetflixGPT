import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const SearchedMovieCard = (props) => {
  console.log(props);
  const { overview, popularity, release_date, title, backdrop_path } =
    props.data;
  return (
    <div class="w-96 h-100 mt-20">
      <div class="bg-white rounded-xl overflow-hidden">
        <img
          class="w-full h-40 object-cover rounded-t-xl"
          src={IMG_CDN_URL + backdrop_path}
          alt="Movie Poster"
        />
        <div class="p-4">
          <h1 class="font-extrabold text-lg mb-2">{title}</h1>

          <p class="text-sm mb-2">Popularity: {popularity}</p>
          <p class="text-sm mb-2">Release Date: {release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchedMovieCard;
