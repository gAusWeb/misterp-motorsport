"use client";

import Image from "next/image";
import ProductCart from "./components/ProductCart";
import Link from "next/link";
import VideoHero from "./components/VideoHero";
import Header from "./components/Header";
import Preheader from "./components/PreHeader";
import { ContentGrid } from "./components/ContentGrid";
import { Carousel } from "./components/Carousel";
import "./text.scss";
import { useEffect, useState } from "react";
import Throttle from "./components/utils/Throttle";

export default function Home() {
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    const threshold = 100;
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

  return (
    <div
      className={["app-container", scrollDir === "down" ? "" : " up"].join("")}
    >
      <Header />

      <VideoHero />

      <section className="section-wrapper flex align-center flex-col">
        <div className="container mx-auto my-auto">
          <div className="mx-4">
            <h1 className="h1 mb-5 font-bold tracking-tight text-gray-900">
              <span className="block">Welcome to</span>
              <span>MR P Motorsports</span>
              {/* <h1 className="mt-0">Welcome to</h1>
            <h1 className="mb-0">MR P Motorsports</h1> */}
            </h1>
            <p className="max-w-4xl mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet
              delectus? Omnis laborum tempora beatae quas! Quia odio laboriosam
              laborum id placeat accusamus architecto impedit suscipit nobis
              porro temporibus, illum, soluta aspernatur itaque et quasi
              corporis voluptas reprehenderit voluptatibus sapiente dolorem
              fugiat. Perferendis ipsa ex sint architecto repellat vitae,
              delectus iure alias vel quidem ducimus voluptatum velit odio.
              Quis, fuga! Velit laudantium consectetur non laboriosam atque vero
              quibusdam modi itaque accusamus, a sint, delectus saepe!
            </p>
          </div>
        </div>
      </section>

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
            <h3 className="h3 section-header font-bold tracking-tight text-gray-900">
              Dyno results
            </h3>
            <Carousel />
          </div>
        </div>
      </section>
    </div>
  );
}
