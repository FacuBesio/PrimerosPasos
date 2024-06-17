import { Route, Routes } from "react-router-dom";
import { EditProduct} from "../components";
import CreateNewProduct from "./Admin/products_dashboard/CreateNewProduct";
import ManageCategories from "./Admin/categories_dashboard/ManageCategories";
import ManageProducts from "./Admin/products_dashboard/ManageProducts";
import ManageShopping from "./Admin/purchases_dashboard/ManageShopping";
import ManageUsers from "./Admin/users_dashboard/ManageUser";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/manageProducts" element={<ManageProducts />} />
        <Route path="/manageProducts/create" element={<CreateNewProduct />} />
        <Route path="/manageProducts/edit" element={<EditProduct />} />
        <Route path="/manageShopping" element={<ManageShopping />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
        <Route path="/manageCategories" element={<ManageCategories />} />
      </Routes>
    </>
  );
};

export default Admin;
