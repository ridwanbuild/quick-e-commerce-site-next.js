"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function HeroSection() {




  const heroSectionData = [
    {
      id: 1,
      offer: "Limited Time Offer 30% Off",
      title: "Experience Pure Sound – Your Perfect Headphones Awaits!",
      button: "Buy now",
      image: "/Hero-section01.webp",
    },
    {
      id: 2,
      offer: "Special Deal 20% Off",
      title: "Upgrade Your Audio Experience with Premium Headphones!",
      button: "Shop now",
      image: "/Hero-section02.webp",
    },
    {
      id: 3,
      offer: "Flash Sale – Save 25%",
      title: "Immerse Yourself in Deep Bass and Crystal Clear Sound!",
      button: "Order now",
      image: "/Hero-section03.webp",
    },
    {
      id: 4,
      offer: "Exclusive Offer 15% Off",
      title: "Feel the Beat — Wireless Freedom, Crystal and Sound! ",
      button: "Explore now",
      image: "/Hero-section04.webp",
    },
  ];

  return (
    <div className=" py-10">
      <Swiper 
      
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{clickable: true}}
      navigation
      autoplay={{delay: 3000}}
      loop={true}
      

      >


        {heroSectionData.map((slide) => (
          <SwiperSlide key={slide.id}>


            {/* content */}

            <div className="flex  flex-col-reverse lg:flex-row items-center bg-slate-200 justify-between  p-10 lg:p-15 rounded-xl py-10">

              <div>
                <p className="text-themeColor py-2 font-semibold">{slide.offer}</p>

                <h1 className="text-lg lg:w-[500px] lg:text-3xl md:text-5xl font-bold ">
                  {slide.title}
                </h1>

                <button className="bg-gray-800 hover:bg-gray-900 transition cursor-pointer text-white px-6 py-2 rounded-full mt-4">
                  {slide.button}
                </button>
              </div>


              <div className="flex items-center justify-center">
                <Image src={slide.image} width={300} height={300}/>
              </div>



            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
