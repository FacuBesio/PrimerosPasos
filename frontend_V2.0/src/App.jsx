import { Routes, Route, useLocation } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Shop from "./pages//Shop.jsx";
import { appStyle } from "./styles.js";
import "./App.css";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import Admin_Routes from "./routes/Admin_Routes.jsx";

function App() {
  const location = useLocation();
  console.log("Render TEST desde App");
  let adminNavegationActive = false;
  if (location.pathname.includes("admin")) {
    adminNavegationActive = true;
  }


  return (
    <div className={`${appStyle}`}>
      {!adminNavegationActive && (
        <header className="w-full">
          <Hero />
        </header>
      )}

      <div className="w-full flex flex-col flex-grow">
        <main className="min-h-screen">
          <Routes>
            //? HOME
            <Route path="/" element={<Home />} />
            //? SHOP
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/shop/productDetail/:id" element={<ProductDetail />} />
            //? CONTACT US
            <Route path="/contacto" element={<ContactUs />} />
            //? ADMIN //*? "/manageProducts"
            <Route path="/admin/*" element={<Admin_Routes />} />
           </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
