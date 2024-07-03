import { useContext, useEffect, useState } from "react";
import { Footer, Title } from "../../../components";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../context";
import getCategories from "../../../utils/categories/getCategories";
import garbage from "../../../assets/garbage.png";
import NavAside from "../../../components/NavAside/NavAside";
import update_icon from "../../../assets/update_icon.png";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import deleteConfirm from "../../../utils/categories/deleteConfirm";
import emptyCategoryValidator from "../../../utils/categories/emptyCategoryValidator";
import CanNot_DeleteNotification from "../../../utils/categories/CanNot_DeleteNotification";

const ManageCategories = () => {
  const { allCategories, setAllCategories } = useContext(CategoriesContext);
  const [removeState, setRemoveState] = useState({ message: "", removed: "" });

  const handlerRemove = async (id, name) => {
    const emptyCategory = await emptyCategoryValidator(id);
    emptyCategory
      ? deleteConfirm(id, name, setRemoveState)
      : CanNot_DeleteNotification(
          name,
          `La categoría no debe tener ningún producto asociado para poder ser eliminada.`
        );
  };

  useEffect(() => {
    getCategories(setAllCategories);
  }, [removeState]);

  return (
    <div className="flex flex-col min-h-screen text-[12px] md:text-[16px] lg:text-[18px]">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <section className="right_section w-full pb-4 pl-20 px-4 flex flex-col items-center gap-4">
          <Title />
          <div className="flex w-full md:gap-4 items-center">
            <Link
              to={"/admin/manageCategories/create"}
              className="bg-slate-400 hover:bg-slate-500 rounded-md p-3 text-center"
            >
              <label
                htmlFor="addCategory"
                className="text-white font-bold cursor-pointer text-[12px] md:text-[18px]"
              >
                + Agregar Categoría
              </label>
            </Link>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full border border-collapse bg-white">
              <thead>
                <tr>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Id
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Nombre
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Subcategorías
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Productos
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Habilitada
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Actualizar
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Eliminar
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {allCategories ? (
                  allCategories.categories?.map((category) => (
                    <tr key={category.id}>
                      <td className="p-1 md:p-4 border text-center">
                        {category.id}
                      </td>
                      <td className="p-1 md:p-4 border text-center">
                        {category.name}
                      </td>
                      <td className="p-1 md:p-4 border">
                        {category.subcategories.length > 0 ? (
                          category.subcategories.map((subcategorie) => (
                            <p key={subcategorie.id}>{subcategorie.name}</p>
                          ))
                        ) : (
                          <p> - </p>
                        )}
                      </td>
                      <td className="p-1 md:p-4 border text-center text-[12px] md:text-[16px] lg:text-[18px]">
                        {category.products.length}
                      </td>
                      <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                        <button>
                          {category.enabled ? (
                            <span className="text-green-500 text-2xl">
                              <CheckCircleOutlined />
                            </span>
                          ) : (
                            <span className="text-red-500 text-2xl">
                              <CloseCircleOutlined />
                            </span>
                          )}
                        </button>
                      </td>
                      <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                        <Link
                          to={`/admin/manageCategories/update/${category.id}`}
                        >
                          <button>
                            <img
                              src={update_icon}
                              alt="Update"
                              className="w-8 h-8 transition-transform duration-300 hover:scale-105"
                            />
                          </button>
                        </Link>
                      </td>
                      <td className="p-1 md:p-4 border">
                        <button
                          onClick={() =>
                            handlerRemove(category.id, category.name)
                          }
                        >
                          <img
                            src={garbage}
                            alt="Eliminar"
                            className="w-8 h-8 transition-transform duration-300 hover:scale-105"
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManageCategories;
