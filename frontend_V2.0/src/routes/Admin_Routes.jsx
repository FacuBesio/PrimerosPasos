import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavAside from "../components/DashboardAdmin/NavAside/NavAside";
import Title from "../components/Title/Title";
import CreateNewProduct from "../components/DashboardAdmin/Dashboard_Products/CreateNewProduct";
import ManageProducts from "../components/DashboardAdmin/Dashboard_Products/ManageProducts";
import UpdateProduct from "../components/DashboardAdmin/Dashboard_Products/UpdateProduct";
import ManageCategories from "../components/DashboardAdmin/Dashboard_Categories/ManageCategories";
import { ShopContext } from "../context";
import ManageSubcategories from "../components/DashboardAdmin/Dashboard_Subcategories/ManageSubcategories";

const Admin_Routes = () => {
  const { setWasShopActive } = useContext(ShopContext);

  useEffect(() => {
    setWasShopActive(false);
  }, []);

  return (
    <section className="flex flex-col min-h-screen">
      <div className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <div className="w-full px-6 pb-6 flex flex-col gap-2">
          <Title />
          <Routes>
            //? PRODUCTS
            <Route path="/manageProducts/" element={<ManageProducts />} />
            <Route
              path="/manageProducts/create"
              element={<CreateNewProduct />}
            />
            <Route
              path="/manageProducts/update/:id"
              element={<UpdateProduct />}
            />
            //? CATEGORIES
            <Route path="/manageCategories/" element={<ManageCategories />} />
            //? SUBCATEGORIES
            <Route path="/manageSubcategories/" element={<ManageSubcategories />} />
  
            {/* <Route path="/admin/managePurchases/*" element={<PurchasesDashboard />} /> */}
            {/* <Route path="/admin/manageUsers/*" element={<UsersDashboard />} /> */}
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default Admin_Routes;
