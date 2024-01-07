import React from "react";
import VideoHeroText from "./VideoHeroText";

const VideoHero = () => {
  return (
    <div className="hero-video relative w-full">
      <VideoHeroText />

      <div className="hero-video__video absolute w-full h-full top-0">
        {/* 
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hVIpI9aGhps?controls=0&autoplay=1&controls=1&loop=1&mute=1&playlist=hVIpI9aGhps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        */}
        <video autoPlay loop muted playsInline>
          <source
            // src="https://www.w3schools.com/html/mov_bbb.mp4"
            src="https://v.ftcdn.net/04/24/42/07/700_F_424420764_UXzl8hGqagqvaHtmNJXOqmmzGv83O3wi_ST.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoHero;
