import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import {CreateNewProduct, EditProduct} from "../components";
import ManageCategories from "./Admin/ManageCategories";
import ManageProducts from "./Admin/ManageProducts";
import ManageShopping from "./Admin/ManageShopping";
import ManageUsers from "./Admin/ManageUser";

const Admin = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<CartMain />} /> */}
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
