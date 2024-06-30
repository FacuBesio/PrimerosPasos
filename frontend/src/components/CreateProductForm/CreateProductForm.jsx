import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postProducts from "../../utils/products/postProducts";
import uploadImageCloudinary from "../../utils/products/uploadImageCloudinary";
import CategoriesAndImage_input from "./InputsForm/CategoriesAndImage_input";
import ColorAndSize_input from "./InputsForm/ColorAndSize_input";
import Description_input from "./InputsForm/Description_input";
import StockAndPrice_input from "./InputsForm/StockAndPrice_input";
import createInputValidator from "../../utils/products/createInputValidator";
import disabledSubmitValidator from "../../utils/products/disabledSubmitValidator";
import BrandAndName_input from "./InputsForm/BrandAndName_input";

const CreateProductForm = () => {
  const navigate = useNavigate();
  const [disabledButton, setDisabledButton] = useState(true);
  const [errors, setErrors] = useState({});
  const [newProduct, setNewProduct] = useState({
    brand: "",
    name: "",
    color: "",
    size: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    subcategory: "",
    img: "",
  });

  useEffect(() => {
    createInputValidator(newProduct, errors, setErrors, setDisabledButton);
  }, [newProduct]);

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;

    if (event.target.type === "file") {
      value = event.target.files[0];
    }

    if (event.target.name === "category") {
      return setNewProduct({
        ...newProduct,
        [property]: value,
        subcategory: "",
      });
    }
    setNewProduct({ ...newProduct, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const imgUrl = await uploadImageCloudinary(newProduct.img);
    postProducts(newProduct, imgUrl, navigate);
  };

  const handlerDisabledButton = (event) => {
    event.preventDefault();
    disabledSubmitValidator(newProduct, errors, setErrors);
  };

  return (
    <div className="rounded-lg flex flex-col w-full items-center gap-2 pr-2">
      <form
        className=" bg-gray-600 bg-opacity-75 p-4 rounded-lg flex flex-col items-center w-1/2"
        onSubmit={handlerSubmit}
      >
        <h1 className="text-white font-bold py-2 rounded-md text-[18px] md:text-[22px]">
          CREAR PRODUCTO
        </h1>

        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col gap-3 items-center">
            <BrandAndName_input handlerChange={handlerChange} errors={errors} />
            <ColorAndSize_input
              handlerChange={handlerChange}
              newProduct={newProduct}
              errors={errors}
            />
            <StockAndPrice_input
              handlerChange={handlerChange}
              errors={errors}
            />
            <CategoriesAndImage_input
              handlerChange={handlerChange}
              newProduct={newProduct}
              errors={errors}
            />
          </div>
          <div className="w-full">
            <Description_input handlerChange={handlerChange} errors={errors} />
          </div>
        </div>

        <div className="formButton w-full flex justify-center mb-2 items-center ">
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
              className="px-8 py-3  bg-green-500 bg-opacity-90 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              CREAR
            </button>
          )}
        </div>
      </form>
      <Link
        to="/admin/manageProducts"
        className="px-6 py-3 mb-2 text-[12px] md:text-[18px] bg-red-300 text-white font-bold rounded-md hover:bg-red-400
        hover:ring-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
      >
        VOLVER
      </Link>
    </div>
  );
};

export default CreateProductForm;
