import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="ml-12 ">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default WatchPage;
