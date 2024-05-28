import Title from "../Title/Title"
import Marquee from "../Marquee/Marquee"
import Banner from "../Banner/Banner"
import Navbar from "../Navbar/Navbar"

const Hero = () => {
  return (
   <div className="">
    <Marquee />
    <Title />
    <Navbar />
    <Banner className=""/>
    </div>
  )
}

export default Hero