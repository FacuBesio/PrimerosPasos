import "./App.css";
import {  useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../src/pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./components/Profile/Profile.jsx";
import appInitialzer from "./utils/app/appInitialzer.js";
import Cart from "./pages/Cart.jsx";

import { mainPages } from "./styles.js";


import  ManageProducts from "../src/pages/Admin/ManageProducts.jsx"
import  ManageShopping from "../src/pages/Admin/ManageShopping.jsx"
import  ManageUser from "../src/pages/Admin/ManageUser.jsx"

import Home from "./pages/Home.jsx";


function App() {
  useEffect(() => {
    appInitialzer();
  }, []);



  return (
    <main className={mainPages}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/cart/*" element={<Cart />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/personalInfo" element={<Profile />} />

        <Route path="/admin/manageProducts" element={<ManageProducts />} />
        <Route path="/admin/manageShopping" element={<ManageShopping />} />
        <Route path="/admin/manageUsers" element={<ManageUser />}  />
      </Routes>
    </main>
  );
}

export default App;
