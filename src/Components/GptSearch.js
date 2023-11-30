import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_URL } from "../Utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div
        className="brightness-50 absolute h-full w-full -z-10 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BACKGROUND_URL})` }}
      ></div>
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
