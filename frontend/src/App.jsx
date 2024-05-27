import "./App.css";
import React, { useEffect, useState } from "react";
import { AditionalInfo, Categories, Footer, Hero } from "./components";
import { Routes, Route } from "react-router-dom";
import Shop from "../src/pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import productInitializer from "./utils/products/productInitializer.js";

function App() {
  // const [allProducts, setAllProducts] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [page, setPage] = useState(1);
 

  const appLocalStates = {
    // allProducts,
    // setAllProducts,
    allBrands,
    setAllBrands,
    page,
    setPage,
  };

  useEffect(() => {
   productInitializer();
  }, []);

  return (
    <main className="bg-[#eae0f5] overflow-hidden">
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
        <Route
          path="/shop"
          element={<Shop appLocalStates={appLocalStates} />}
        />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
