import { Route, Routes } from "react-router-dom";
import ProductsDashboard from "./Admin/ProductsDashboard";
import CategoriesDashboard from "./Admin/CategoriesDashboard";
import SubcategoriesDashboard from "./Admin/SubcategoriesDashboard";
import PurchasesDashboard from "./Admin/PurchasesDashboard";
import UsersDashboard from "./Admin/UsersDashboard";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/manageProducts/*" element={<ProductsDashboard />} />
        <Route path="/manageCategories/*" element={<CategoriesDashboard />} />
        <Route path="/manageSubcategories/*" element={<SubcategoriesDashboard />} />
        <Route path="/managePurchases/*" element={<PurchasesDashboard />} />
        <Route path="/manageUsers/*" element={<UsersDashboard />} />
      </Routes>
    </>
  );
};

export default Admin;
