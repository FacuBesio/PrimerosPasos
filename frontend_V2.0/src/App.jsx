import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages//Shop.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { appStyle } from "./styles.js";
import "./App.css";

function App() {
  console.log("Render TEST desde App");

  return (
    <div className={`${appStyle}`}>
      <header>
        <Hero />
      </header>

      <div className="w-full flex flex-col flex-grow">
        <main className="flex flex-grow min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/*" element={<Shop />} />
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
