import React, { useContext, useEffect } from "react";
import { Footer, Marquee, Navbar, Title } from "../../components";
import { mainPages } from "../../styles";
import { Link } from "react-router-dom";
import { FilterContext, PagesContext, ProductsContext, SearchContext, SortContext } from "../../context";
import getProducts from "../../utils/products/getProducts";
import Paginated from "../../components/Paginated/Paginated";

const ManageUser = () => {
  

  return (
    <main className={mainPages}>
      <Marquee />
      <Title />
      <Navbar />
      <div className=" flex">
        <section className="left_section flex flex-col bg-red-200 w-fit p-6  gap-6">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/admin/manageProducts">Products</Link>
          <Link to="/admin/manageShopping">Purchases</Link>
          <Link to="/admin/manageUsers">Users</Link>
        </section>
        <section className="right_section flex items-start gap-4">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 border">Imagen producto</th>
                <th className="p-2 border">Nombre del producto</th>
                <th className="p-2 border">Descripcion del producto</th>
                <th className="p-2 border">Stock del producto</th>
                <th className="p-2 border">Habilitado</th>
              </tr>
            </thead>
            <tbody>
              {productsAvailable ? (
                allProducts.products.map((product) => (
                  <tr key={product.id}>
                    <td className="p-4 border">
                      <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                    </td>
                    <td className="p-4 border">{product.name}</td>
                    <td className="p-4 border">{product.description}</td>
                    <td className="p-4 border">{product.stock}</td>
                    <td className="p-4 border">{product.enabled ? "Sí" : "No"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center p-4">
                    No se encuentran productos disponibles.
                  </td>
                </tr>
              )}
            </tbody>
         
          </table>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ManageUser;
