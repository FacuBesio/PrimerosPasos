import { Route, Routes } from "react-router-dom";
import ManageShopping from "./Admin/purchases_dashboard/ManageShopping";
import ManageUsers from "./Admin/users_dashboard/ManageUser";
import ProductsDashboard from "./Admin/ProductsDashboard";
import CategoriesDashboard from "./Admin/CategoriesDashboard";
import SubcategoriesDashboard from "./Admin/SubcategoriesDashboard";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/manageProducts/*" element={<ProductsDashboard />} />
        <Route path="/manageCategories/*" element={<CategoriesDashboard />} />
        <Route path="/manageSubcategories/*" element={<SubcategoriesDashboard />} />
        <Route path="/manageShopping" element={<ManageShopping />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
      </Routes>
    </>
  );
};

export default Admin;
