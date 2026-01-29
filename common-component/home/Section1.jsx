"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
const Section1 = () => {
  return (
    <div className="h-40 mt-20">
      <Swiper
        modules={[Autoplay, FreeMode]}
        autoplay={{
          delay: 400,
        }}
        freeMode
        loop
        spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Section1;
