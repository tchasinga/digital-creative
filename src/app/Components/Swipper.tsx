
"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import MySwipper from '../Projects/ObjectsThree'
import Image from "next/image";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swipper() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 10000)}s`;
  };
  return (
    <div className='mainSwiper'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {MySwipper.map((imagurl , i) => (
              <SwiperSlide key={imagurl.id}>
              <div className="h-[550px] relative object-cover" style={{background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${imagurl.myImg}) center no-repeat`, backgroundSize: "cover",}}>
                  <div className="text-white text-4xl absolute bottom-10 right-0 left-0 px-5 font-bold">
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
