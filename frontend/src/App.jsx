import React, { Suspense, lazy } from "react";
import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
const Cart = lazy(() => import("./pages/Cart"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Profile = lazy(() => import("./components/Profile/Profile"));
import appInitialzer from "./utils/app/appInitialzer.js";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import { mainPages } from "./styles.js";

import ManageProducts from "../src/pages/Admin/ManageProducts.jsx";
import ManageShopping from "../src/pages/Admin/ManageShopping.jsx";
import ManageUser from "../src/pages/Admin/ManageUser.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    appInitialzer();
  }, []);
  console.log("Test Render APP");

  return (
    <main className={mainPages}>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/cart/*" element={<Cart />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/personalInfo" element={<Profile />} />

            <Route path="/admin/manageProducts" element={<ManageProducts />} />
            <Route path="/admin/manageShopping" element={<ManageShopping />} />
            <Route path="/admin/manageUsers" element={<ManageUser />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </main>
  );
}

export default App;
