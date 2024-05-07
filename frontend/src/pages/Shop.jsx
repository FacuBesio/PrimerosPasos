import React from "react";
import { Footer, Marquee, Navbar, Title } from "../components";

const Shop = () => {
  return (
    <main className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar />
      <section className="left-side">
        <div className="category-section">
          <h2>Categorias</h2>
          <li>
            <ul>
              <h3>Ropa de bebes</h3>
              <h3>Mecedoras</h3>
              <h3>Cunas de bebes</h3>
              <h3>Baño</h3>
              <h3>Bolsos y mochilas</h3>
            </ul>
          </li>
        </div>
        <div className="category-section">
          <h2>Marcas</h2>
          <li>
            <ul>
              <h3>Mimo&co</h3>
              <h3>Carestino</h3>
              <h3>Cheeky</h3>
              <h3>Sarasa</h3>
            </ul>
          </li>
        </div>
        <div className="category-section">
          <h2>Rango de precio:</h2>
          <form action="">
            <label htmlFor="">
              <input type="text" placeholder="min" />
            </label>
            <label htmlFor="">
              <input type="text" placeholder="max" />
            </label>
          </form>
        </div>
        <div className="category-section">
          <div>
            <h3>Ordenar por precio</h3>
            <select name="" id="">
              <option value="">Precio</option>
              <option value="">Menor precio</option>
              <option value="">Mayor precio</option>
            </select>
          </div>
          <div>
            <h3>Ordenar por rating</h3>
            <select name="" id="">
              <option value="">Sin rating</option>
              <option value="">Menor rating</option>
              <option value="">Mayor rating</option>
            </select>
          </div>
        </div>
      </section>
      <section className="right-side">
        aqui iria grilla con productos
      </section>
      <Footer />
    </main>
  );
};

export default Shop;
