import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  function toggleSignInForm() {
    setIsSignUp(!isSignUp);
  }

  return (
    <div>
      <Header />
      <div className="absolute bg-gradient-to-b from-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
          alt="background-image"
        />
      </div>
      <form className="absolute p-15 bg-black w-[480px] m-auto left-0 right-0 my-36 text-white opacity-90 rounded-lg">
        <h1 className="font-bold text-3xl mb-8">
          {isSignUp ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignUp && (
          <input
            type="name"
            placeholder="Full Name"
            className="w-full p-3 py-4 bg-black mb-4 border border-white rounded-lg"
          ></input>
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 py-4 bg-black mb-4 border border-white rounded-lg"
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 py-4 bg-black border border-white  rounded-lg"
        ></input>
        <button className="w-full p-3 mb-3 bg-red-700 mt-8 opacity-100">
          {isSignUp ? "Sign in" : "Sign up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignUp ? (
            <p>
              New to Netflix? <span className="underline">Sign up now.</span>
            </p>
          ) : (
            <p>
              Already a user? <span className="underline">Sign in now.</span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
