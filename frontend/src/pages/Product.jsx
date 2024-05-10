
import { Footer, Marquee, Navbar, Title } from '../components'

const Product = () => {
  return (
    <div className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar />
      <div>Aqui iria el producto detallado</div>
      <Footer />
    </div>
  )
}

export default Product