import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, 
  },
};

const Banner = () => {
  const carouselImg = [
    {image: "/src/assets/banner1.png",},
    {image: "/src/assets/banner2.png",},
    {image: "/src/assets/banner3.png" },
    {image: "/src/assets/banner4.png" },
  ];

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
      deviceType={null} 
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className="max-h-[660px]"
    >
      {carouselImg.map((car) => (
        <div key={car} className="bg-red-200">
          <img className="" src={car.image} alt="carrousel imagenes" />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
