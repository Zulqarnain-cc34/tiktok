import React from "react";
import "../css/Videofooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
function Videofooter({ channel, description, song }) {
  return (
    <div className="video__footer">
      <div className="video__footer__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videofooter__ticker">
          <MusicNoteIcon className="videofooter___icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videofooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="logo"
      />
    </div>
  );
}

export default Videofooter;
