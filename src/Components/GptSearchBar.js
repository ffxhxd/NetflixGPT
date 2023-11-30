import React, { useEffect, useRef, useState } from "react";
import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[8%] flex justify-center">
      {/* <form
        className="w-1/2 grid grid-cols-12 bg-black opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          // onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form> */}
    </div>
  );
};

export default GptSearchBar;

// import React, { useState } from "react";
// import lang from "../Utils/languageConstants";
// import { API_OPTIONS } from "../Utils/constants";

// const GptSearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResult, setSearchResult] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         "https://api.themoviedb.org/3/search/movie?query=" +
//           { searchQuery } +
//           "&include_adult=true&language=en-US&page=1",
//         API_OPTIONS
//       );
//       const data = await response.json();

//       // Log the result to the console
//       console.log("Search Result:", data);

//       // Update state with the search result
//       setSearchResult(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="pt-[8%] flex justify-center">
//       <form
//         className="w-1/2 grid grid-cols-12 bg-black opacity-90"
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSearch();
//         }}
//       >
//         <input
//           type="text"
//           className="p-4 m-4 col-span-9"
//           //placeholder={lang[langKey].gptSearchPlaceholder}
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
//         >
//           {/* {lang[langKey].search} */}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GptSearchBar;
