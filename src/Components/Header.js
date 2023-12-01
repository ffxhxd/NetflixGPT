import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/Redux/userSlice";
import {
  LOGO_URL,
  SUPPORTED_LANGUAGES,
  USER_ICON_URL,
} from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/Redux/gptSlice";

import lang from "../Utils/languageConstants";
import { changeLanguage } from "../Utils/Redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    //toggle gpt search button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //clean up ... this will be called when component will unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-4 sm:px-8 py-2 flex items-center justify-between">
      <img className="relative z-40 w-24 sm:w-32" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex items-center justify-center h-2 mt-2 sm:mt-5 z-50">
          {showGptSearch && (
            <select
              className="p-1 bg-red-600 font-bold text-white h-8 rounded-lg mx-2 sm:mx-4 my-1 text-sm sm:text-base"
              value={lang.identifier}
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="text-white"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="mr-2 sm:mr-4 font-bold text-white bg-purple-900 h-8 py-1 px-2 rounded-lg text-sm sm:text-base"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "HOME" : "GPT SEARCH"}
          </button>
          <img
            className="w-5 h-5 sm:w-6 sm:h-6"
            alt="userIcon"
            src={USER_ICON_URL}
          />
          <button
            onClick={handleSignOut}
            className="p-2 text-sm sm:text-base ml-2 font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
