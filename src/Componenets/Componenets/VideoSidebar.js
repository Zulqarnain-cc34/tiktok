import React, { useState } from "react";
import "../css/VideoSidebar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
function VideoSidebar({ likes, shares, messages }) {
  const [liked, setliked] = useState(false);

  return (
    <div className="VideoSidebar">
      <div className="videosidebar__btn">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setliked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setliked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videosidebar__btn">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videosidebar__btn">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
