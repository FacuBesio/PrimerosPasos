import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { mainPages } from "../../styles";
import Title from "../Title/Title";
import getCategories from "../../utils/categories/getCategories";

const CreateNewProduct = () => {
  let disabledButton = false;
  let newProductInputs = {};
  const [allCategories, setAllCategories] = useState([]);

  console.log("allCategories: ", allCategories);

  useEffect(() => {
    getCategories(setAllCategories);
  }, []);

  // Handlers y lógica de tu componente
  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    newProductInputs = { ...newProductInputs, [property]: value };
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log("newProductInputs: ", newProductInputs);
    // Lógica de envío de formulario
  };

  return (
    <main className={mainPages}>
      <div className="w-full flex">
        <section className="left_section flex flex-col bg-red-200 w-fit p-6 gap-6">
          {/* <Title /> */}

          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/admin/manageProducts">Products</Link>
          <Link to="/admin/manageShopping">Purchases</Link>
          <Link to="/admin/manageUsers">Users</Link>
          <Link to="/admin/manageCategories">Categories</Link>
        </section>
        <section className="right_section w-full px-10 flex flex-col items-center">
          <Title />
          {/* <div className=" w-full flex gap-2 bg-yellow-200"> */}
          <div className="w-full rounded-lg flex flex-col items-center pt-4 pb-8 px-4">
            <form
              className="w-1/2 bg-gray-600 bg-opacity-75 rounded-lg p-4 flex flex-col items-center  mb-8"
              onSubmit={handlerSubmit}
            >
              <h1 className="text-white font-bold rounded-md p-4">
                CREAR PRODUCTO
              </h1>

              <div className="w-full flex flex-col gap-4 items-center">
                <div className="w-full px-4 py-3 flex flex-col gap-2">
                  <label
                    htmlFor="brand"
                    className="w-full text-white font-bold"
                  >
                    Marca
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Marca o Diseñador/a del producto..."
                    onChange={handlerChange}
                  />
                </div>

                <div className="w-full px-4 py-3 flex flex-col gap-2">
                  <label htmlFor="name" className="w-full text-white font-bold">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Producto..."
                    onChange={handlerChange}
                  />
                </div>

                <div className="w-full px-4 py-3 flex flex-col gap-2">
                  <label
                    htmlFor="color"
                    className="w-full text-white font-bold"
                  >
                    Color
                  </label>
                  <select
                    multiple
                    id="color"
                    name="color"
                    className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onChange={handlerChange}
                  >
                    <option
                      value=""
                      className="bg-gray-300 rounded-md hover:bg-gray-400 bg-opacity-75"
                      disabled
                    >
                      Seleccioná un color...
                    </option>
                    {allCategories?.categories?.map((category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="w-full px-4 py-3 flex flex-col gap-2">
                  <label htmlFor="size" className="w-full text-white font-bold">
                    Talle
                  </label>
                  <select
                    multiple
                    id="size"
                    name="size"
                    className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onChange={handlerChange}
                  >
                    <option
                      value=""
                      className="bg-gray-300 rounded-md hover:bg-gray-400 bg-opacity-75"
                      disabled
                    >
                      Seleccioná un talle...
                    </option>
                    {allCategories?.categories?.map((category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="w-full px-4 py-3 flex flex-col gap-2">
                  <label
                    htmlFor="image"
                    className="w-full text-white font-bold"
                  >
                    Imagen
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Imagen.jpg"
                    onChange={handlerChange}
                  />
                </div>

                <div className="w-full px-4 py-3 flex flex-col gap-2">
                  <label
                    htmlFor="description"
                    className="w-full text-white font-bold"
                  >
                    Descripción:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Detallá las características principales de tu producto..."
                    onChange={handlerChange}
                  ></textarea>
                </div>

                <div className="w-full px-4 py-3 flex flex-col gap-2">
                  <label
                    htmlFor="price"
                    className="w-full text-white font-bold"
                  >
                    Precio
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="$..."
                    onChange={handlerChange}
                  />
                </div>

                <div className="w-full px-4 py-3 flex flex-col gap-2">
                  <label
                    htmlFor="stock"
                    className="w-full text-white font-bold"
                  >
                    Stock
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Cantidad de unidades disponibles..."
                    onChange={handlerChange}
                  />
                </div>
              </div>

              {/* Botones */}
              <div className="formButton w-full flex justify-center items-center mt-4">
                {disabledButton ? (
                  <button
                    type="submit"
                    id="buttonDisabled"
                    disabled={disabledButton}
                    className="px-6 py-3 bg-gray-500 text-white font-bold rounded-md cursor-not-allowed"
                  >
                    CREATE
                  </button>
                ) : (
                  <button
                    type="submit"
                    id="buttonEnabled"
                    disabled={disabledButton}
                    className="px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    CREATE
                  </button>
                )}
              </div>
            </form>
            <Link
              to="/admin/manageProducts"
              className="px-6 py-3 bg-red-300 text-white font-bold rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Volver
            </Link>
          </div>
          {/* </div> */}
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default CreateNewProduct;
