import React from "react";
import { Footer, Marquee, Navbar, Title } from "../components";
import ProductComponent from "../components/ProductComponent/Product";

const Shop = () => {
  return (
    <main className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-red-200 mt-4">
      <section className="left-side  border-red-200 border-r-2  w-[15%] p-6">
        <div className="category-section ">
          <h2 className="py-4 underline underline-offset-4">Categorias</h2>
          <li className="list-none">
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
          <h2 className="py-4 underline underline-offset-4">Marcas</h2>
          <li className="list-none">
            <ul>
              <h3>Mimo&co</h3>
              <h3>Carestino</h3>
              <h3>Cheeky</h3>
              <h3>Sarasa</h3>
            </ul>
          </li>
        </div>
        <div className="category-section">
          <h2 className="py-4 underline underline-offset-4">Rango de precio:</h2>
          <form className="flex gap-2" action="">
            <label htmlFor="">
              <input className="w-full border rounded-md " type="text" placeholder="min" />
            </label>
            <label htmlFor="">
              <input className="w-full rounded-md border" type="text" placeholder="max" />
            </label>
          </form>
        </div>
        <div className="category-section">
          <div>
            <h3 className="py-4 underline underline-offset-4">Ordenar por precio</h3>
            <select className="rounded-md" name="" id="">
              <option value="">Precio</option>
              <option value="">Menor precio</option>
              <option value="">Mayor precio</option>
            </select>
          </div>
          <div>
            <h3 className="py-4 underline underline-offset-4">Ordenar por rating</h3>
            <select className="rounded-md" name="" id="">
              <option value="">Sin rating</option>
              <option value="">Menor rating</option>
              <option value="">Mayor rating</option>
            </select>
          </div>
        </div>
      </section>
      <ProductComponent />
      </div>
      <Footer />
    </main>
  );
};

export default Shop;
