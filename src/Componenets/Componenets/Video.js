import React, { useRef, useState } from "react";
import "../css/Video.css";
import Videofooter from "./Videofooter";
import VideoSidebar from "./VideoSidebar";
function Video({ url, channel, description, messages, song, likes, shares }) {
  const [playing, setplaying] = useState(false);
  const VideoRef = useRef(null);

  const handleVideoClick = () => {
    if (playing) {
      VideoRef.current.pause();
      setplaying(false);
    } else {
      VideoRef.current.play();
      setplaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        onClick={handleVideoClick}
        loop
        ref={VideoRef}
        src={url}
      ></video>

      <Videofooter song={song} channel={channel} description={description} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
