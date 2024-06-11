import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../src/pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./components/Profile/Profile.jsx";
import appInitialzer from "./utils/app/appInitialzer.js";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";

function App() {
  useEffect(() => {
    appInitialzer();
  }, []);

  return (
    <main className="bg-[#eae0f5]  bg-gradient-to-b from-[#eae0f5] to-red-200 overflow-hidden">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/cart/*" element={<Cart />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/personalInfo" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
