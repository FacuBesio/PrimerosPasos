import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";

import { motion } from "framer-motion";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Banner = () => {
  const carouselImg = [
    { image: banner1 },
    { image: banner2 },
    { image: banner3 },
    { image: banner4 },
  ];

  return (
    // <motion.div
    // initial={{ opacity: 0, y: 250 }}
    // animate={{ opacity: 1, y: 0 ,}}
    // transition={{ duration: 0.5 }}
    // >
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
      className="max-h-[660px] h-full w-full"
    >
      {carouselImg.map((car) => (
        <div key={car} className="w-full h-full bg-red-200  ">
          <img className=" w-full h-full " src={car.image} alt="" />
        </div>
      ))}
    </Carousel>
    // </motion.div>
  );
};

export default Banner;
