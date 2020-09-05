import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Componenets/Componenets/Video";
import axios from "./axios.js";

function App() {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    async function fetchpost() {
      const response = await axios.get("/v2/posts");
      setvideos(response.data);

      return response;
    }

    fetchpost();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, messages, song, description, shares, likes }) => (
            <Video
              url={url}
              messages={messages}
              shares={shares}
              likes={likes}
              song={song}
              description={description}
              channel={channel}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
