import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/Redux/userSlice";
import { BACKGROUND_URL } from "../Utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //sign in signup logic
    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="">
        <div className="brightness-50 absolute h-full w-full">
          <img className="w-full h-full" src={BACKGROUND_URL} alt="logo" />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="sm:w-96 md:w-120 lg:w-1/3 xl:w-1/4 rounded-md p-6 absolute my-36 mx-auto right-0 left-0 bg-black flex flex-col align-center justify-center gap-4 bg-opacity-70"
        >
          <h1 className="text-3xl text-white p-2 m-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="name"
              placeholder="Full Name"
              className="p-3 m-2 w-full rounded-md bg-slate-200 text-black border-none"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="p-3 m-2 w-full rounded-md bg-slate-200 text-black border-none"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 m-2 w-full rounded-md bg-slate-200 text-black border-none"
          />
          <p className="text-base font-bold pl-2 text-red-800">
            {errorMessage}
          </p>
          <button
            className="p-3 m-2 w-full bg-red-700 rounded-md text-lg font-semibold text-white"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-base p-2 m-2 text-white cursor-pointer"
            onClick={toggleForm}
          >
            {isSignIn ? "New to Netflix?" : "Already a user?"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
