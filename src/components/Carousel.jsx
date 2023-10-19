'use client';

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselItem from './CarouselItem';
import { carouselLinks } from '@/utils/carouselLinks';

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

      {
        carouselLinks.map( item => (
          <CarouselItem key={item.id} title={item.title} imageSrc={item.imageSrc} />   
        ))
      }      

    </Slider>
  )
}

export default Carousel