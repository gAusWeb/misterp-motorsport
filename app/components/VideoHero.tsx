import React from "react";
import VideoHeroText from "./VideoHeroText";

const VideoHero = () => {
  return (
    <div className="hero-video relative w-full">
      <div className="hero-video__wrapper">
        <video autoPlay loop muted playsInline>
          <source
            src="https://v.ftcdn.net/04/24/42/07/700_F_424420764_UXzl8hGqagqvaHtmNJXOqmmzGv83O3wi_ST.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 Videos - please update.
        </video>
      </div>

      <VideoHeroText />
    </div>
  );
};

export default VideoHero;
