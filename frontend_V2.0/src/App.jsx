import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Shop from "./pages//Shop.jsx";
import { appStyle } from "./styles.js";
import "./App.css";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";

function App() {
  console.log("Render TEST desde App");

  return (
    <div className={`${appStyle}`}>
      <header>
        <Hero />
      </header>

      <div className="w-full flex flex-col flex-grow">
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/shop/productDetail/:id" element={<ProductDetail />} />
            <Route path="/contacto" element={<ContactUs />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
