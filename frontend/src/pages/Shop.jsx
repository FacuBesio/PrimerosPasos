import { Route, Routes } from "react-router-dom";
import AllProducts from "./ShopPages/AllProducts";
import ProductsByCategory from "./ShopPages/ProductsByCategory";


const Shop = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="categories/:id" element={<ProductsByCategory />} />
      </Routes>
    </>
  );
};

export default Shop;