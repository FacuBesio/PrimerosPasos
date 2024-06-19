import { Route, Routes } from "react-router-dom";
import ManageProducts from "./products_dashboard/ManageProducts";
import CreateNewProduct from "./products_dashboard/CreateNewProduct";
import { EditProduct } from "../../components";


//? "/manageProducts"
const ProductsDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ManageProducts />} />
        <Route path="/create" element={<CreateNewProduct />} />
        <Route path="/edit" element={<EditProduct />} />
      </Routes>
    </>
  );
};

export default ProductsDashboard;
