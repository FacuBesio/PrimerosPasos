import { useContext, useEffect, useState } from "react";
import { Footer, Title } from "../../../components";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../context";
import getSubCategories from "../../../utils/subcategories/getSubCategories";
import garbage from "../../../assets/garbage.png";
import NavAside from "../../../components/NavAside/NavAside";
import update_icon from "../../../assets/update_icon.png";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import deleteConfirm from "../../../utils/subcategories/deleteConfirm";


const ManageSubcategories = () => {
  const { allSubCategories, setAllSubCategories } =
    useContext(CategoriesContext);
  const [removeState, setRemoveState] = useState({ message: "", removed: "" });

  const handlerRemove = (id, name) => {
    deleteConfirm(id, name, setRemoveState);
  };

  useEffect(() => {
    getSubCategories(setAllSubCategories);
  }, [removeState]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <section className="right_section w-full pl-14 px-4 flex flex-col items-center gap-4">
          <Title />
          <div className="flex w-full  md:gap-4 items-center  ">
            <Link to={"/admin/manageSubcategories/create"}>
              <label
                htmlFor="image"
                className=" bg-white p-2  text-gray-800 font-bold rounded-md hover:bg-red-200  cursor-pointer"
              >
                + Agregar Subcategoría
              </label>
            </Link>
          </div>
          <div className="w-full overflow-auto">
          <table className="w-full border border-collapse bg-white">
            <thead>
              <tr>
                <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Id</th>
                <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Nombre</th>
                <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Categoría</th>
                <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Productos</th>
                <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Habilitada</th>
                <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Actualizar</th>
                <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Eliminar</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {allSubCategories ? (
                allSubCategories.subcategories?.map((subcategory) => (
                  <tr key={subcategory.id}>
                    <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px] text-center">{subcategory.id}</td>
                    <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px] text-center">
                      {subcategory.name}
                    </td>
                    <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px] text-center">
                      {subcategory.category.name}
                    </td>
                    <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px] text-center">
                      {subcategory.products.length}
                    </td>
                    <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                      <button>
                        {subcategory.enabled ? (
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
                        to={`/admin/manageSubcategories/update/${subcategory.id}`}
                      >
                        <button>
                          <img
                            src={update_icon}
                            alt="Update"
                            className="w-12 h-12 transition-transform duration-300 hover:scale-105"
                          />
                        </button>
                      </Link>
                    </td>
                    <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                      <button onClick={() => handlerRemove(subcategory.id, subcategory.name)}>
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
                    No se encuentran subcategorías disponibles.
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

export default ManageSubcategories;
