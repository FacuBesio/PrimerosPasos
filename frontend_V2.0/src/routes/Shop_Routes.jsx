import { Route, Routes } from "react-router-dom";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Shop from "../pages/Shop";

const Shop_Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/productDetail/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default Shop_Routes;
