import { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [errormessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  function handleSubmit() {
    const message = validate(email.current.value, password.current.value);

    setErrorMessage(message);
    if (message) return;

    if (!isSignUp) {
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
            photoURL: "",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/");
              setErrorMessage("Please Login!");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  }

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-15 bg-black w-[480px] m-auto left-0 right-0 my-36 text-white opacity-90 rounded-lg"
      >
        <h1 className="font-bold text-3xl mb-8">
          {isSignUp ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignUp && (
          <input
            ref={name}
            type="name"
            placeholder="Full Name"
            className="w-full p-3 py-4 bg-black mb-4 border border-white rounded-lg"
          ></input>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="w-full p-3 py-4 bg-black mb-4 border border-white rounded-lg"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 py-4 bg-black border border-white  rounded-lg"
        ></input>
        <p className="text-red-500">{errormessage}</p>
        <button
          onClick={handleSubmit}
          className="w-full p-3 mb-3 bg-red-700 mt-8 opacity-100 cursor-pointer"
        >
          {isSignUp ? "Sign in" : "Sign up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignUp ? (
            <span>
              New to Netflix? <span className="underline">Sign up now.</span>
            </span>
          ) : (
            <span>
              Already a user? <span className="underline">Sign in now.</span>
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
