import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store?.app?.isMenuOpen)

  // Early Return Pattern
  if (!isMenuOpen) return null

  
  return (
    <div className="p-5">
      <div className="w-48 h-[580px] overflow-y-scroll">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr className="border border-b-1 border-gray-400 my-3"/>
      <h1 className="font-bold">You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>PLaylists</li>
        <li>Your Video</li>
        <li>Watch Later</li>
      </ul>
      <hr className="border border-b-1 border-gray-400 my-3"/>
      <h1 className="font-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
      </ul>
      <hr className="border border-b-1 border-gray-400 my-3"/>
      <h1 className="font-bold">More from Youtube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
      <hr />
      </div>
    </div>
  );
};

export default Sidebar;
