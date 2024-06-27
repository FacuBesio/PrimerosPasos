import Title from "../Title/Title";
import Marquee from "../Marquee/Marquee";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div>
      <Marquee />
      {/* <div className="flex items-center justify-between px-4"> */}
      <Title />
      <Navbar />
      {/* </div> */}
    </div>
  );
};

export default Hero;
