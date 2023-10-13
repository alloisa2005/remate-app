'use client';

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

const Carousel = () => {

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>       
      <div className='w-full h-[450px] relative'>
        <Image src={'/banner/foto1.jpg'} alt='Foto 1' width={1000} height={400} className='w-full h-full object-cover'/>
        <div className='absolute bottom-10 left-0 w-full'>          
          <div className='flex justify-center w-full'>
            <h1 className='bg-gray-500/80 px-6 py-4 md:px-20 md:py-6 lg:px-36 lg:py-8 rounded-lg text-4xl text-white font-poppins'>Productos Antiguos</h1>          
          </div>
        </div>
      </div>       

      <div className='w-full h-[450px] relative'>
        <Image src={'/banner/foto2.jpg'} alt='Foto 1' width={1000} height={400} className='w-full h-full object-cover'/>
        <div className='absolute bottom-10 left-0 w-full'>          
          <div className='flex justify-center w-full'>
            <h1 className='bg-gray-500/80 px-6 py-4 md:px-20 md:py-6 lg:px-36 lg:py-8 rounded-lg text-4xl text-white font-poppins'>Productos Antiguos</h1>          
          </div>
        </div>
      </div>    

      <div className='w-full h-[450px] relative'>
        <Image src={'/banner/foto2.jpg'} alt='Foto 1' width={1000} height={400} className='w-full h-full object-cover'/>
        <div className='absolute bottom-10 left-0 w-full'>          
          <div className='flex justify-center w-full'>
            <h1 className='bg-gray-500/80 px-6 py-4 md:px-20 md:py-6 lg:px-36 lg:py-8 rounded-lg text-4xl text-white font-poppins'>Productos Antiguos</h1>          
          </div>
        </div>
      </div>          

    </Slider>
  )
}

export default Carousel