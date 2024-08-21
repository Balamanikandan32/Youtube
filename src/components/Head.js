import hamburgerIcon from "../Assets/hamburgerIcon .jpeg";
import youtubeLogo from "../Assets/youtubeLogo.jpg";
import userIcon from "../Assets/userIcon.png";
import searchIcon from "../Assets/searchIcon.jpeg";
import { toggleMenu } from "../utility/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col">
      <div className="flex col-span-1">
        <img
          className="h-16 cursor-pointer"
          src={hamburgerIcon}
          alt="hamger-Icon"
          onClick={toggleMenuHandler}
        />
        <img className="h-16" src={youtubeLogo} alt="Youtube-Logo" />
      </div>
      <div className="flex col-span-10">
        <input
          className="my-3 rounded-l-3xl p-2 px-4 w-1/2 ml-32 border border-r-0 border-gray-700"
          type="text"
          placeholder="Search"
        />
        <button className="px-2 border border-gray-700 rounded-r-3xl my-3">
          <img className="h-8" src={searchIcon} alt="search-icon" />
        </button>
      </div>
      <div className="flex items-center col-span-1">
        <img className="h-10" src={userIcon} alt="user-Icon" />
      </div>
    </div>
  );
};

export default Head;
