import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postProducts from "../../utils/products/postProducts";
import Name_input from "./InputsForm/Name_input";

import disabledSubmitValidator from "../../utils/products/disabledSubmitValidator";
import postCategories from "../../utils/categories/postCategories";
import createInputValidator from "../../utils/categories/createInputValidator";

const CreateCategoryForm = () => {
  const navigate = useNavigate();
  const [disabledButton, setDisabledButton] = useState(true);
  const [errors, setErrors] = useState({});
  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  useEffect(() => {
    createInputValidator(newCategory, errors, setErrors, setDisabledButton);
  }, [newCategory]);

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setNewCategory({ ...newCategory, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    postCategories(newCategory, navigate);
  };

  const handlerDisabledButton = (event) => {
    event.preventDefault();
    disabledSubmitValidator(newCategory, errors, setErrors);
  };

  return (
    <div className="rounded-lg flex flex-col w-full items-center gap-2 pr-2 text-[12px] md:text-[18px]">
      <form
        className=" bg-gray-600 bg-opacity-75 p-4 rounded-lg flex flex-col items-center w-1/2"
        onSubmit={handlerSubmit}
      >
        <h1 className="text-white font-bold py-2 rounded-md text-[18px] md:text-[22px]">
          CREAR CATEGORÍA
        </h1>

        <div className="w-full flex flex-col gap-3 items-center">
          <Name_input handlerChange={handlerChange} errors={errors} />
        </div>

        <div className="formButton w-full flex justify-center items-center ">
          {disabledButton ? (
            <button
              id="buttonDisabled"
              onClick={handlerDisabledButton}
              className="px-8 py-3 bg-slate-400 text-[12px] md:text-[18px] text-white font-bold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              CREAR
            </button>
          ) : (
            <button
              type="submit"
              id="buttonEnabled"
              disabled={disabledButton}
              className="px-8 py-3 bg-green-500 bg-opacity-90 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              CREAR
            </button>
          )}
        </div>
      </form>
      <Link
        to="/admin/manageCategories"
        className="px-6 py-3 mb-2 text-[12px] md:text-[18px] bg-red-300 text-white font-bold rounded-md hover:bg-red-400
        hover:ring-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
      >
        VOLVER
      </Link>
    </div>
  );
};

export default CreateCategoryForm;
