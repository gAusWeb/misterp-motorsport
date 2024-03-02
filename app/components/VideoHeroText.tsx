import React from "react";

const VideoHeroText = () => {
  const videoStyle = {
    position: "absolute",
    width: "100%",
    minWidth: "100%",
    height: "100%",
    top: 0,
    objectFit: "cover",
    zIndex: -1,
  };

  return (
    <>
      <div className="hero-video__text-wrapper flex justify-center absolute">
        <div
          className="hero-video__text-wrapper__inner 
          justify-center 
          w-full 
          flex-col 
          p-5 
          flex 
          items-center 
          rounded-2xl 
          text-center 
        "
        >
          {/* <h1 className="mb-11 last:mb-0">Mis-terp</h1> */}
          <div className="content">
            <h2>Mr P Motorsports</h2>
            <h2>Mr P Motorsports</h2>
            {/* <h2>Misterpmotorsports</h2>
            <h2>Misterpmotorsports</h2> */}
          </div>
          {/* <h3
            style={{
              color: "white",
              transform: "translateY(30px)",
              fontWeight: 400,
              fontSize: "1.5rem",
            }}
          >
            Professional Dyno Tuning
          </h3> */}
          {/* <h1 className="last:mb-0 animate-charcter">Mis-terp Motorsports</h1> */}
          {/* md:text-xl xl:text-4xl 2xl:text-9xl */}
          {/* <h2 className=" last:mb-0 text-pink-500 text-purple-600">
              High-performance dyno tuning
            </h2> */}
        </div>
      </div>
    </>
  );
};

export default VideoHeroText;
