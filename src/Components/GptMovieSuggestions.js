import React, { useState } from "react";
import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import SearchedMovieCard from "./SearchedMovieCard";

const GptMovieSuggestions = () => {
  const langKey = useSelector((store) => store.config.lang);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}"&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await response.json();
      setSearchResult(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="pt-8 flex justify-center">
        <form
          className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 grid grid-cols-12 bg-black opacity-90 m-11"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            className="p-3 sm:p-4 m-2 sm:m-4 col-span-8 sm:col-span-9"
            placeholder={lang[langKey].gptSearchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="col-span-4 sm:col-span-3 m-2 sm:m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>

      <div className="flex overflow-x-scroll no-scrollbar overflow-y-hidden gap-5">
        <div className="flex gap-2 cursor-pointer">
          {searchResult ? (
            searchResult.map((curr) => (
              <SearchedMovieCard data={curr} key={curr.id} />
            ))
          ) : (
            <h1>FAHAD</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default GptMovieSuggestions;
