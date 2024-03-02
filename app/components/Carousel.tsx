"use client";
// import { useEffect, useRef } from 'react';
// import { register } from 'swiper/element/bundle';

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ContentTile } from "./ContentTile";
import { GainsMeter } from "./GainsMeter";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

export const Carousel = (props: any) => {
  // const swiper = new Swiper(".swiper", {
  //   // configure Swiper to use modules
  //   modules: [Navigation, Pagination],
  // });

  // const swiperRef = useRef(null);

  // useEffect(() => {
  //   // Register Swiper web component
  //   register();

  //   // Object with parameters
  //   const params = {
  //     slidesPerView: 3,
  //     breakpoints: {
  //       768: {
  //         slidesPerView: 4,
  //       },
  //     },
  //   };

  //   // Assign it to swiper element
  //   Object.assign(swiperRef.current, params);

  //   // initialize swiper
  //   swiperRef.current.initialize();
  // }, []);

  return (
    <div className="mb-40">
      <div className="container mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          // navigation={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <GainsMeter originalPower={190} gainsPower={300} />
            {/* <GainsMeter gainsPower={420} /> */}
            {/* <ContentTile
              imgSrc="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Dyno Tuning"
            /> */}
          </SwiperSlide>
          <SwiperSlide>
            <GainsMeter originalPower={422} gainsPower={575} />
            {/* <ContentTile
              imgSrc="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Performance Updrades"
            /> */}
          </SwiperSlide>
          <SwiperSlide>
            <GainsMeter originalPower={345} gainsPower={620} />
            {/* <ContentTile
              imgSrc="https://www.pulsarturbo.com.au/cdn/shop/files/logo_G30_1024x1024@2x.webp?v=1686715068"
              title="Pulsar Reseller"
            /> */}
          </SwiperSlide>
          <SwiperSlide>
            <GainsMeter originalPower={145} gainsPower={276} />
            {/* <ContentTile
              imgSrc="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Dyno Tuning"
            /> */}
          </SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};
