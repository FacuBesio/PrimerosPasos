import "./App.css";
import  { useEffect } from "react";
import { AditionalInfo, Categories, Footer, Hero } from "./components";
import { Routes, Route } from "react-router-dom";
import Shop from "../src/pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";

import ProductDetail from "./pages/ProductDetail.jsx";
import Profile from "./components/Profile/Profile.jsx";
import appInitialzer from "./utils/app/appInitialzer.js";

import CartMain from "./pages/CartPages/Cart.jsx";
import CartPurchase from "./pages/CartPages/CartPurchase.jsx"

import Lenis from 'lenis'

function App() {
  

  const lenis = new Lenis()

lenis.on('scroll', (e) => {
 
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  useEffect(() => {
    appInitialzer();
  }, []);

  return (
    <main className="bg-[#eae0f5]  bg-gradient-to-b from-[#eae0f5] to-red-200 overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AditionalInfo />
              <Categories />
              <Footer />
            </>
          }
        />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contacto" element={<Contact />} />
       
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/personalInfo" element={<Profile />} />

        
        <Route path="/cart" element={<CartMain />} />
        <Route path="/cart/purchase" element={<CartPurchase  />} />
      </Routes>
    </main>
  );
}

export default App;
