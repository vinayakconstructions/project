"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({slides,className}) => {

  const handleDownload = () => {
    const brochureUrl = "/Vinayak_Construction_Brochure.pdf"; // Change this to your actual file path
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Vinayak_Construction_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
        pagination={{ clickable: true }}
        // loop={true}
        navigation
        className="w-full className h-[320px] sm:h-[720px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[320px] sm:h-auto object-cover"
              />
              
              {/* Glassmorphism Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center w-2/3 hidden sm:block ">
                  <h1 className="text-[14px] sm:text-3xl sm:font-bold ">{slide.title}</h1>
                  <p className="hidden sm:block m-6">
                  Vinayak Constructions Company is a reputed firm specializing in residential, commercial,PEB, Warehouse and infrastructure development projects across India. With a strong presence in multiple regions, the company offers a range of services
                  </p>
                  <a style={{cursor:"pointer",zIndex:99999999}}>
                  <button
                    onClick={handleDownload}
                    className="w-[200] bg-gradient-to-r from-customBrown to-customBrown hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full items-center gap-2 shadow-xl transition-all transform hover:scale-110 active:scale-95 border border-white/30"

                  >
                     Download Brochure
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
       <style jsx>{`
       
        `}</style>
      </Swiper>
  );
};

export default Carousel;
