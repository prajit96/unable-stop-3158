import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Child = () => {
  return (
    <div className='adhf'>
 <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper" style={{width: "100%"}}
      >
        <SwiperSlide>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage--Banner-marvel-Kidswear.jpg?format=webp&w=1440&dpr=1.3" alt="img1" />
        </SwiperSlide>
     
        <SwiperSlide>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage--Banner_SIgvbrI.jpg?format=webp&w=1440&dpr=1.3" alt="img2" />
        </SwiperSlide>
     
        <SwiperSlide>
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage--Banner-kidwear_1.jpg?format=webp&w=1440&dpr=1.3" alt="img3" />
        </SwiperSlide>
        
     
      </Swiper>
    </>
    </div>
  )
}

export default Child