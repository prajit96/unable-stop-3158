// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "../styles/Women.css";
import "swiper/css/grid";
import { Autoplay, Pagination, Navigation,Keyboard, Scrollbar } from "swiper";

const Child = () => {
  return (
    <div className='adhf'>
 <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
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
      <div style={{fontSize:"27px",fontWeight:"700",fontFamily:"sans-serif",textAlign:"center",paddingTop:"25px",paddingBottom:"25px",color:"#282C3F"}}>
        <h1>COLLECTIONS</h1>
      </div>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/tile_boys_r.jpg?format=webp&w=480&dpr=1.3" alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/tile_girls_b.jpg?format=webp&w=480&dpr=1.3" alt="img2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/tile_marvel_r.jpg?format=webp&w=480&dpr=1.3" alt="img3"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/tile_looney_tunes_b.jpg?format=webp&w=480&dpr=1.3" alt="img4"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/tile_flash_r.jpg?format=webp&w=480&dpr=1.3" alt="img5"/>
        </SwiperSlide>
      </Swiper>
      <div style={{fontSize:"27px",fontWeight:"700",fontFamily:"sans-serif",textAlign:"center",paddingTop:"25px",paddingBottom:"25px",color:"#282C3F"}}>
        <h1>SHOP BY AGE</h1>
      </div>
      <div className="grided">
        <div><img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kidswearmtile1-SQ_dwisqZP.png?format=webp&w=480&dpr=1.3" alt="" /></div>
        <div><img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kidswearmtile1-SQ2_XQ54htk.png?format=webp&w=480&dpr=1.3" alt="" /></div>
      </div>
      <div style={{fontSize:"27px",fontWeight:"700",fontFamily:"sans-serif",textAlign:"center",paddingTop:"25px",paddingBottom:"25px",color:"#282C3F"}}>
        <h1>MEMBERSHIP</h1>
      </div>
      <div style={{width:"100%",height:"100%",paddingLeft:"100px"}}>
        <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Exclusive-Members-Tile_Desktop_aMZI7UU.jpg?format=webp&w=1440&dpr=1.3" alt="" />
      </div>
      <div style={{marginTop:"40px"}}>
        <div style={{width:"100%",height:"80px",fontSize:"30px",fontWeight:"600",textAlign:"center",fontFamily:"sans-serif",paddingTop:"18px", backgroundColor:"red", color:"#fff"}}>
            <h1>HOMEGROWN INDIAN BRAND</h1>
        </div>
        <div style={{width:"100%",height:"100px",marginTop:"15px",fontSize:"50px",fontFamily:"sans-serif",textAlign:"center"}}>
            <h1>Over 5.5 Million Happy Customers</h1>
        </div>
        <div style={{backgroundColor:"#E6E7E8", width:"100%",height:"500px"}}>
          <div style={{display:"flex", marginLeft:"150px", justifyContent:"space-around" }}>
            <div>
              <h3 style={{marginTop:"32px",fontWeight:"700",fontSize:"22px",color:"#Ed2E30",fontFamily:"sans-serif"}}>NEED HELP</h3>
              <div className='hover' style={{fontWeight:"700",fontSize:"18px",color:"#58595B",}}>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Contact Us</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Track Order</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Returns & Refunds</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>FAQs</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>My Account</p>
              </div>
            </div>
            <div>
              <h3 style={{marginTop:"32px",fontWeight:"700",fontSize:"22px",color:"#Ed2E30",fontFamily:"sans-serif"}}>COMPANY</h3>
              <div className='hover' style={{fontWeight:"700",fontSize:"18px",color:"#58595B"}}>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>About Us</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Careers</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Stores Near Me</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>From The Soul</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Souled Army</p>
              </div>
            </div>
            <div>
              <h3 style={{marginTop:"32px",fontWeight:"700",fontSize:"22px",color:"#Ed2E30",fontFamily:"sans-serif"}}>MORE INFO</h3>
              <div className='hover' style={{fontWeight:"700",fontSize:"18px",color:"#58595B"}}>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>T&C</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Privacy Policy</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Sitemap</p>
              </div>
            </div>
            
          </div>
          <div>
            <p style={{fontSize:"20px",fontWeight:"700",color:"#58595B",fontFamily:"sans-serif",textAlign:"center",paddingTop:"15px"}}>EXPERIENCE THE SOULED STORE APP</p>
          </div>
          <div style={{display:"flex",width:"150px",marginLeft:"650px",marginTop:"15px",gap:"20px"}}>
          <img src="https://tss-static-images.gumlet.io/icons/play-store.png" alt="playstore" />
          <img src="https://tss-static-images.gumlet.io/icons/app-store.png" alt="applestore" />
          </div>
        </div>
    </div>
    </>
    </div>
  )
}

export default Child