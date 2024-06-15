import "./App.css";
import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
const Admin = lazy(() => import("./pages/Admin.jsx"));
const Contact = lazy(() => import("./pages/Contact"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
import appInitialzer from "./utils/app/appInitialzer.js";
import { motion, AnimatePresence } from "framer-motion";
import { mainPages } from "./styles.js";
import Lenis from "lenis";

function App() {
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {});
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const location = useLocation();

  useEffect(() => {
    appInitialzer();
  }, []);
  console.log("Test Render APP");

  return (
    <main className={mainPages}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<Home />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route
            path="/admin/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Admin />
              </Suspense>
            }
          />
          <Route
            path="/contacto"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/profile/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Profile />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
