import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { appStyle } from "./styles.js";
import Admin_Routes from "./routes/Admin_Routes.jsx";
import useAdminNavegation from "./hooks/Admin/useAdminNavegation.js";
import Shop_Routes from "./routes/Shop_Routes.jsx";
import useAppInitializer from "./hooks/App/useAppInitializer.js";
import Cart_Routes from "./routes/Cart_Routes.jsx";
import Profile_Routes from "./routes/Profile_Routes.jsx";
import { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx";
import CartAside from "./components/CartAside/CartAside.jsx"

function App() {
  useAppInitializer();
  const { adminNavegationActive } = useAdminNavegation();
  const { isCartOpen } = useContext(CartContext);

  console.log("Render TEST desde App");
  console.log("isCartOpen: ", isCartOpen);

  return (
    <div className={`${appStyle}`}>
      {isCartOpen && <CartAside  />}

      {!adminNavegationActive && (
        <header className="w-full">
          <Hero />
        </header>
      )}
      <div className="w-full flex flex-col flex-grow">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/*" element={<Admin_Routes />} />
            <Route path="/cart/*" element={<Cart_Routes />} />
            <Route path="/contacto" element={<ContactUs />} />
            <Route path="/profile/*" element={<Profile_Routes />} />
            <Route path="/shop/*" element={<Shop_Routes />} />
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
