/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Footer, Title } from "../../../components";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../context";
import getCategories from "../../../utils/categories/getCategories";
import garbage from "../../../assets/garbage.png";
import NavAside from "../../../components/NavAside/NavAside";
import update_icon from "../../../assets/update_icon.png";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const ManageCategories = () => {
  const { allCategories, setAllCategories } = useContext(CategoriesContext);

  useEffect(() => {
    getCategories(setAllCategories);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <section className="right_section w-full px-10 flex flex-col items-center gap-4">
          <Title />
          <div className="flex w-full px-4 py-5 md:gap-4 items-center justify-between overflow-x-auto">
            <Link to={"/admin/manageCategories/create"}>
              <label
                htmlFor="image"
                className="px-6 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
              >
                + Agregar Categoría
              </label>
            </Link>
          </div>
          <table className="w-full border border-collapse bg-white">
            <thead>
              <tr>
                <th className="p-4 border">Id</th>
                <th className="p-4 border">Nombre</th>
                <th className="p-4 border">Subcategorías</th>
                <th className="p-4 border">Productos</th>
                <th className="p-4 border">Habilitada</th>
                <th className="p-4 border">Editar</th>
                <th className="p-4 border">Eliminar</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {allCategories ? (
                allCategories.categories?.map((category) => (
                  <tr key={category.id}>
                    <td className="p-4 border text-center">{category.id}</td>
                    <td className="p-4 border text-center">{category.name}</td>
                    <td className="p-4 border">
                      {category.subcategories.length > 0 ? (
                        category.subcategories.map((subcategorie) => (
                          <p key={subcategorie.id}>{subcategorie.name}</p>
                        ))
                      ) : (
                        <p> - </p>
                      )}
                    </td>
                    <td className="p-4 border text-center">
                      {category.products.length}
                    </td>
                    <td className="p-4 border">
                      <button>
                        {category.enabled ? (
                          <span className="text-green-500 text-2xl">
                            <CheckOutlined />
                          </span>
                        ) : (
                          <span className="text-red-500 text-2xl">
                            <CloseOutlined />
                          </span>
                        )}
                      </button>
                    </td>
                    <td className="p-4 border">
                      <Link
                        to={`/admin/manageCategories/update/${category.id}`}
                      >
                        {" "}
                        <button>
                          <img
                            src={update_icon}
                            alt="Update"
                            className="w-12 h-12 transition-transform duration-300 hover:scale-105"
                          />
                        </button>
                      </Link>
                    </td>
                    <td className="p-4 border">
                      <button>
                        <img
                          src={garbage}
                          alt="Eliminar"
                          className="w-12 h-12 transition-transform duration-300 hover:scale-105"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center p-4">
                    No se encuentran categorías disponibles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ManageCategories;
