import { useEffect } from "react";
import { YOUTUBE_API_URL } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utility/videoSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store?.videos?.video);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    dispatch(addVideos(json?.items));
  };

  // early written pattern
  if (!videos) return null;

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link to = {"/watch?v="+video.id} key={video.id}  >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
