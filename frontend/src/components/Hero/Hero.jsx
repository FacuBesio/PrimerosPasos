import Title from "../Title/Title"
import Marquee from "../Marquee/Marquee"
import Banner from "../Banner/Banner"
import Navbar from "../Navbar/Navbar"

const Hero = () => {
  return (
   <div className="lg:h-screen">
    <Marquee />
    <Title />
    <Navbar />
    <Banner />
    </div>
  )
}

export default Hero