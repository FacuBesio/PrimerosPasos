import { Route, Routes } from "react-router-dom";
import ManageProducts from "./products_dashboard/ManageProducts";
import CreateNewProduct from "./products_dashboard/CreateNewProduct";
import UpdateProduct from "./products_dashboard/UpdateProduct";
import { EditProduct } from "../../components";


//? "/manageProducts"
const ProductsDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ManageProducts />} />
        <Route path="/create" element={<CreateNewProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
      </Routes>
    </>
  );
};

export default ProductsDashboard;
