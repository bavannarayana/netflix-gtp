import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);
  // console.log(userData);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubcribes when components unmounts
    return () => unsubscribe();
  }, []);

  const handleClick = function () {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10">
      <img
        className="w-40 translate-y-[-50px] translate-x-3"
        src="https://www.svgrepo.com/show/303196/netflix-2-logo.svg"
      />
      {userData && (
        <div className="flex translate-y-[-20px]">
          <img className="w-9 h-9 mt-[30px] z-10" src={LOGO} alt="user logo" />
          <button
            className="text-red-500 h-8 z-10 font-bold mt-8 bg-amber-50 rounded-lg ml-3 mr-10 cursor-pointer"
            onClick={handleClick}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
