import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Browse = () => {
  const navigate = useNavigate();
  const handleClick = function () {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };
  return (
    <div className="flex bottom-10 justify-between">
      <div>
        <Header />
      </div>
      <div className="flex">
        <img
          className="w-9 h-9 mt-[30px] z-10"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user logo"
        />
        <button
          className="text-red-500 h-8 z-10 font-bold mt-8 bg-amber-50 rounded-lg ml-3 mr-10 cursor-pointer"
          onClick={handleClick}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Browse;
