import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="brightness-50 absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-4/12 rounded-md p-12 absolute my-36 mx-auto right-0 left-0 bg-black flex flex-col align-center justify-center gap-6 bg-opacity-70">
        <h1 className="text-3xl text-white p-2 m-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="name"
            placeholder="Full Name"
            className="p-4 m-2 w-full rounded-md bg-slate-200 text-black border-none"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-4 m-2 w-full rounded-md bg-slate-200 text-black border-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full rounded-md bg-slate-200 text-black border-none"
        />
        <button className="p-4 m-2 w-full bg-red-700 rounded-md text-xl font-semibold text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-l p-2 m-2 text-white cursor-pointer"
          onClick={toggleForm}
        >
          {isSignIn ? " New to Netflix?" : "Alreday a user?"}
        </p>
      </form>
    </div>
  );
};

export default Login;
