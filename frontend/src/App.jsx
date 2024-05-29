import "./App.css";
import React, { useEffect } from "react";
import { AditionalInfo, Categories, Footer, Hero } from "./components";
import { Routes, Route } from "react-router-dom";
import Shop from "../src/pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import productInitializer from "./utils/products/productInitializer.js";
import Profile from "./components/Profile/Profile.jsx";

function App() {
  useEffect(() => {
    if (window.sessionStorage.getItem("visited") === null) {
      if (window.localStorage.getItem("cart") !== null) {
        window.localStorage.removeItem("cart");
      }
      productInitializer();
      const visited = true;
      const cart = {
        id: null,
        User: null,
        products: [],
        Purchase: 0,
      };
      window.localStorage.setItem("cart", JSON.stringify(cart));
      window.sessionStorage.setItem("visited", JSON.stringify(visited));
    }
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
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/personalInfo" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
