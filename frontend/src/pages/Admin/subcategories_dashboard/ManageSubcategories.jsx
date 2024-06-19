/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect } from "react";
import { Footer, Title } from "../../../components";
import { mainPages } from "../../../styles";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../context";
import getSubCategories from "../../../utils/subcategories/getSubCategories";
import garbage from "../../../assets/garbage.png";
import NavAside from "../../../components/NavAside/NavAside";

const ManageSubcategories = () => {
  const { allSubCategories, setAllSubCategories } =
    useContext(CategoriesContext);

  useEffect(() => {
    getSubCategories(setAllSubCategories);
  }, []);

  return (
    <main className={mainPages}>
      <div className="w-full flex">
        <NavAside />
        <section className="right_section w-full px-10 flex flex-col items-center gap-4">
          <Title />
          <div className="flex w-full px-4 py-5 md:gap-4 items-center justify-between overflow-x-auto">
            <Link to={"/admin/manageSubcategories/create"}>
              <label
                htmlFor="image"
                className="px-6 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
              >
                + Agregar Subcategoría
              </label>
            </Link>
          </div>
          <table className="w-full border border-collapse bg-white">
            <thead>
              <tr>
                <th className="p-4 border">Id</th>
                <th className="p-4 border">Nombre</th>
                <th className="p-4 border">Categoría</th>
                <th className="p-4 border">Habilitada</th>
                <th className="p-4 border">Editar</th>
                <th className="p-4 border">Eliminar</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {allSubCategories ? (
                allSubCategories.subcategories?.map((subcategory) => (
                  <tr key={subcategory.id}>
                    <td className="p-4 border text-center">{subcategory.id}</td>
                    <td className="p-4 border text-center">
                      {subcategory.name}
                    </td>
                    <td className="p-4 border text-center">
                      {subcategory.category.name}
                    </td>
                    <td className="p-4 border">
                      <button>{subcategory.enabled ? "Sí" : "No"}</button>
                    </td>
                    <td className="p-4 border">
                      <Link to={"/admin/manageProducts/edit"}>EDIT</Link>
                    </td>
                    <td className="p-4 border">
                      <button>
                        <img
                          src={garbage}
                          alt="Eliminar"
                          className="w-12 h-12"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center p-4">
                    No se encuentran subcategorías disponibles.
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

export default ManageSubcategories;
