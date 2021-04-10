import React from "react";
import "./_VideoPlayer.scss";
const VideoPlayer = ({ video, title }) => {
  return (
    <div className="player-wrapper">
      {video ?
        <iframe
          title={title}
          src={video}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="true"
          scrolling="no"
          className="player-iframe"
          width="100%"
          height="100%"
        ></iframe> : <div style={{ width: "100%", height: "100%", backgroundColor: "red" }}></div>}
    </div>
  );
};

export default VideoPlayer;
