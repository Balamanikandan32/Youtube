import hamburgerIcon from "../Assets/hamburgerIcon .jpeg";
import youtubeLogo from "../Assets/youtubeLogo.jpg";
import userIcon from "../Assets/userIcon.png";
import searchIcon from "../Assets/searchIcon.jpeg";
import { toggleMenu } from "../utility/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utility/constants";
import { cacheResults } from "../utility/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [ShowsuggestionMenu, setShowSuggestionMenu] = useState(false);
  const searchCache = useSelector((store) => store?.cache);
  useEffect(() => {
    // make an api call after every key stokes
    // but if the diff between 2 api calls is < 200ms
    // declien the api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestionMenu(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // key - i
  // - render the Component
  // useEffect()
  // start api call after 200ms

  // key -ip
  // - destroy the compoennt( useEffect retun fn is called)
  // - render the Component
  // useEffect()
  // start api call after 200ms
  // even before 200ms if p is type it first destroy the component (i.e it call return fn in useEffect())

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //update cache
    searchQuery && dispatch(cacheResults({ [searchQuery]: json[1] }));
  };
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
        <a href="/">
          <img className="h-16" src={youtubeLogo} alt="Youtube-Logo" />
        </a>
      </div>
      <div className="col-span-10">
        <div className="flex">
          <input
            className="my-3 rounded-l-3xl p-2 px-4 w-1/2 ml-32 border border-r-0 border-gray-700"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestionMenu(true)}
            onBlur={() => setShowSuggestionMenu(false)}
          />
          <button className="px-2 border border-gray-700 rounded-r-3xl my-3">
            <img className="h-8" src={searchIcon} alt="search-icon" />
          </button>
        </div>
        {suggestions.length > 0 && ShowsuggestionMenu && (
          <div className="fixed left-[23rem] w-[32rem] z-10 border bg-white p-2 shadow-xl rounded-xl">
            <ul>
              {suggestions?.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center col-span-1">
        <img className="h-10" src={userIcon} alt="user-Icon" />
      </div>
    </div>
  );
};

export default Head;
