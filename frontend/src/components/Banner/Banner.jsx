import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Banner = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} 
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={8000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={null} // assuming you're not passing deviceType as a prop
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className=''
    >
      <div className='w-full bg-red-200 h-[620px] '><img className='object-cover w-full' src="/src/assets/banner1.png" alt="" /></div>
      <div className='w-full bg-blue-200  h-[620px] '><img className='object-cover  w-full' src="/src/assets/banner2.png" alt="" /></div>
      <div className='w-full bg-green-200  h-[620px] '><img className='object-cover  w-full' src="/src/assets/banner3.png" alt="" /></div>
      <div className='w-full bg-yellow-200  h-[620px] '><img className='object-cover  w-full' src="/src/assets/banner4.png" alt="" /></div>
    </Carousel>
  );
}

export default Banner;
