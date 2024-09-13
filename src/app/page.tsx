"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import './page.module.css';
import { Swiper,SwiperSlide }  from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Page2 from "@/app/page2";
import Page3 from "./page3";
import Page4 from "./page4";
export default function Home() {
  const images=
  [
    '/banner-01.jpg','/banner-02.jpg','/banner-03.jpg'
  ]
  return (
    <>
    <Swiper 
    modules={[Navigation,Pagination]}
    navigation
    pagination={{clickable:true,
      type:'progressbar'
    }}    
    >
    {images.map((image,index)=>(
      <SwiperSlide key={index}>
      <div className="bestvilla" >
      <Image src={image} width={1300} height={700} alt="" className="respon"/>
     </div>
     </SwiperSlide>
    ))}
      
    </Swiper>
    <div className="hurry">
     Hurry! Get the best villa for you
    </div>
    <Page2/>
    <Page3/>
    <Page4/>
    </>
    
  );
}