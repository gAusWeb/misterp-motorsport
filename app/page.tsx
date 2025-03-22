"use client";

import Image from "next/image";
import ProductCart from "./components/ProductCart";
import Link from "next/link";
import VideoHero from "./components/VideoHero";
import Header from "./components/Header";
import Preheader from "./components/PreHeader";
import { ContentGrid } from "./components/ContentGrid";
import { Carousel } from "./components/Carousel";
import "./components/parallax-css.scss";
import "./text.scss";
import { createRef, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Parallax from "./components/Parallax";
import { TypeAnimation } from "react-type-animation";
import Typewriter from "./components/Typewriter";
import ScrollPieChart from "./components/ScrollPieChart/ScrollPieChart";

export default function Home() {
  const [scrollDir, setScrollDir] = useState("down");
  const [isPageScrollTop, setIsPageScrollTop] = useState(true);
  const { scrollY, scrollYProgress } = useScroll();
  const animationSection1 = useRef<HTMLDivElement | null>(null);
  const textIntroCopy = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: scrollIntroText } = useScroll({
    target: animationSection1,
    // offset: ["50vh", "0vh"],
    offset: ["-50vh", "end start"],
  });

  // const rotate = useMotionValue(0);

  const compWrapper: string[] = ["app-container"];

  const myX = useMotionValue(0);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(
    scrollIntroText,
    [0, 0.25, 0.5, 0.85, 0.9, 0.95, 1],
    [0, 1, 1, 1, 0.8, 0.1, 0]
  );

  // console.log(
  //   "CSS-Variable",
  //   getComputedStyle(document.body).getPropertyValue("--video-height")
  // );

  let videoHeight =
    getComputedStyle(document.body).getPropertyValue("--video-height") || 0;

  videoHeight = Number(videoHeight);

  // const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  // get document height
  const animateSectionHeight = animationSection1.current?.offsetHeight || 0;
  // console.log("TEST", videoHeight);

  // console.log(scrollYProgress);
  // console.log("hi", useTransform(scrollYProgress, [0, 1], [0, 1]));

  const opacity = useTransform(
    scrollY,
    // [700, 1200, videoHeight, videoHeight + 500],
    [
      videoHeight,
      videoHeight + 500,
      videoHeight,
      videoHeight + animateSectionHeight - 200,
      videoHeight + animateSectionHeight - 100,
    ],
    [0, 1, 1, 1, 0]
    // {
    //   clamp: false,
    // }
  );

  // console.log("y", y);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);
  const [rotate2, setRotate2] = useState(0);

  // const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const threshold = 400;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      if (scrollY < lastScrollY) {
        setScrollDir("up");
      } else {
        setScrollDir(scrollY > lastScrollY ? "down" : "up");
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollProgress = scrollTop / (scrollHeight - clientHeight);
      rotate.set(scrollProgress * 360);

      if (window.pageYOffset === 0) {
        setIsPageScrollTop(true);
      } else {
        setIsPageScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [rotate]);

  // console.log("scrollYProgress", scrollYProgress.get());

  // console.log(scrollYProgress);

  const [inViewTrigger, setInViewTrigger] = useState(false);

  if (inView && !inViewTrigger) {
    setInViewTrigger(true);
  }

  isPageScrollTop && compWrapper.push(" scroll--page-top");

  scrollDir === "down" ? "" : compWrapper.push(" up");

  return (
    <div className={compWrapper.join("")}>
      <Header />

      <VideoHero />

      {/* <Parallax /> */}

      <section
        ref={animationSection1}
        className="section-wrapper flex align-center flex-col"
      >
        <div className="container mx-auto my-auto">
          <div className="mx-4">
            <motion.div ref={ref} style={{ opacity }}>
              <div className="welcome-text fixed">
                <div className="flex relative">
                  <h1
                    className="h1 mb-5 font-bold text-gray-900"
                    style={
                      {
                        // height: "250px",
                        // visibility: inView ? "visible" : "hidden",
                      }
                    }
                  >
                    {inViewTrigger && (
                      // add animation to bring in text from left to right
                      <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <span>
                          <Typewriter
                            text="Welcome to"
                            delay={100}
                            infinite={false}
                            Class="block"
                          />
                          <Typewriter
                            text="MR P Motorsports"
                            delay={100}
                            infinite={false}
                          />
                        </span>
                      </motion.div>
                    )}

                    {/* <span className="block">Welcome to</span>
                  <span>MR P Motorsports</span> */}
                  </h1>
                  {/* <motion.div className="wrapper">
                                        <motion.div
                                            className="pie spinner"
                                            style={{
                                                rotate,
                                            }}
                                        ></motion.div>

                                        <div className="pie filler"></div>
                                        <div className="mask"></div>
                                        <div className="center"></div>
                                    </motion.div> */}

                  {/* <motion.div className="wrapper">
                    <motion.div
                      className="pie spinner"
                      style={{
                        rotate: useTransform(
                          scrollYProgress,
                          [0, 0.5, 1],
                          [0, 180, 360]
                        ),
                      }}
                    ></motion.div>

                    <motion.div
                      className="pie filler"
                      style={{
                        display: scrollYProgress.get() > 0.5 ? "block" : "none",
                        rotate: useTransform(
                          scrollYProgress,
                          [0.5, 1],
                          [0, 180]
                        ),
                      }}
                    ></motion.div>

                    <div className="mask"></div>
                    <div className="center"></div>
                  </motion.div> */}

                  <ScrollPieChart scrollYProgress={scrollIntroText} />
                </div>

                {/* <motion.div
                  style={{
                    translateY,
                    background: "rgba(0,0,0,.1)",
                  }}
                >
                  <p>test</p>
                </motion.div> */}

                <div ref={textIntroCopy}>
                  <motion.div style={{ scale }}>
                    <p className="max-w-4xl mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A, amet delectus? Omnis laborum tempora beatae quas! Quia
                      odio laboriosam laborum id placeat accusamus architecto
                      impedit suscipit nobis porro temporibus, illum, soluta
                      aspernatur itaque et quasi corporis voluptas reprehenderit
                      voluptatibus sapiente dolorem fugiat. Perferendis ipsa ex
                      sint architecto repellat vitae, delectus iure alias vel
                      quidem ducimus voluptatum velit odio. Quis, fuga! Velit
                      laudantium consectetur non laboriosam atque vero quibusdam
                      modi itaque accusamus, a sint, delectus saepe!
                    </p>
                  </motion.div>
                </div>
                {/* <div className="wrapper">
                  <div className="pie spinner"></div>
                  <div className="pie filler"></div>
                  <div className="mask"></div>
                  <div className="center"></div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <motion.div className="cust-container">
        <motion.div
          style={{
            rotate,
          }}
          className="cust-item"
          // transition={{ type: "spring" }}
        ></motion.div>
      </motion.div> */}

      <section className="section-wrapper flex align-center flex-col">
        <div className="container mx-auto my-auto">
          <div className="mx-4">
            <ContentGrid />
          </div>
        </div>
      </section>

      <section className="section-wrapper flex align-center flex-col">
        <div className="container mx-auto my-30 mr-auto">
          <div className="mx-4">
            <h3 className="h3 section-header font-bold text-gray-900">
              Dyno results
            </h3>
            <Carousel />
          </div>
        </div>
      </section>
    </div>
  );
}
