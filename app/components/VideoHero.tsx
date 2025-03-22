import React, { use } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import VideoHeroText from "./VideoHeroText";

const VideoHero = () => {
  // const targetRef = React.useRef<HTMLDivElement>(null);

  const videoWrapper = React.useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: videoWrapper,
    offset: ["end end", "end start"],
  });

  const videoHeight = videoWrapper.current?.offsetHeight || 0;
  document.body.style.setProperty("--video-height", `${videoHeight}`);
  // .style.setProperty('--variable', 'value');

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const translateZ = useTransform(scrollYProgress, [0, 0.5], [1, 8]);
  const originX = useTransform(scrollYProgress, [0, 0.51], [0, 200]);

  return (
    <section className="hero-video relative w-full">
      <motion.div style={{ opacity }} ref={videoWrapper}>
        <motion.div style={{ translateY: originX }} ref={videoWrapper}>
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoHero;
