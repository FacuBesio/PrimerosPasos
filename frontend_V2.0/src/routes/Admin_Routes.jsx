import { Routes, Route } from "react-router-dom";
import ManageProducts from "../components/DashboardAdmin/Dashboard_Products/ManageProducts/ManageProducts";
import NavAside from "../components/DashboardAdmin/NavAside/NavAside";
import Title from "../components/Title/Title";
import { useContext, useEffect } from "react";
import { ShopContext } from "../context";

const Admin_Routes = () => {
  const { setWasShopActive } = useContext(ShopContext);

  useEffect(()=> {
    setWasShopActive(false)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <section className="w-full pb-2 px-6 flex flex-col gap-4">
          <Title />
          <Routes>
            //? PRODUCTS
            <Route path="/manageProducts/" element={<ManageProducts />} />
            {/* <Route path="/admin/manageProducts/create" element={<CreateNewProduct />} />
            <Route path="/admin/manageProducts/update/:id" element={<UpdateProduct />} /> */}
            //? CATEGORIES
            {/* <Route path="/admin/manageCategories/*" element={<CategoriesDashboard />} />
            <Route path="/admin/manageSubcategories/*" element={<SubcategoriesDashboard />} />
            <Route path="/admin/managePurchases/*" element={<PurchasesDashboard />} />
            <Route path="/admin/manageUsers/*" element={<UsersDashboard />} /> */}
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default Admin_Routes;
