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

function App() {
  useAppInitializer();
  const { adminNavegationActive } = useAdminNavegation();
  console.log("Render TEST desde App");

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
            <Route path="/" element={<Home />} />
            <Route path="/shop/*" element={<Shop_Routes />} />
            <Route path="/contacto" element={<ContactUs />} />
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
