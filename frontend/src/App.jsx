import "./App.css";
import React, { useEffect } from "react";
import { AditionalInfo, Categories, Footer, Hero } from "./components";
import { Routes, Route } from "react-router-dom";
import Shop from "../src/pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import productInitializer from "./utils/products/productInitializer.js";

function App() {
  useEffect(() => {
    productInitializer();
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
      </Routes>
    </main>
  );
}

export default App;
