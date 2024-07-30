import { Link, useNavigate } from "react-router-dom";
import CategoriesAndImage_input from "./InputsForm/CategoriesAndImage_input";
import ColorAndSize_input from "./InputsForm/ColorAndSize_input";
import Description_input from "./InputsForm/Description_input";
import StockAndPrice_input from "./InputsForm/StockAndPrice_input";
import BrandAndName_input from "./InputsForm/BrandAndName_input";
import uploadImageCloudinary from "../../../../utils/cloudinary/uploadImageCloudinary";
import disabledSubmitValidator from "../../../../utils/products/disabledSubmitValidator";
import useNewProduct from "../../../../hooks/Products/useNewProduct";
import postProducts from "../../../../services/Products/postProducts";
import showCreateNotification from "../../../../utils/products/showCreateNotification";
import useLoadEffect from "../../../../hooks/Effects/useLoadEffect";
import { invisible, transition_200, visible } from "../../../../styles";

const CreateNewProduct = () => {
  const navigate = useNavigate();
  const { newProduct, setNewProduct, errors, setErrors, disabled } =
    useNewProduct();
  const { loadEffect } = useLoadEffect();
  const form_visibility = loadEffect ? visible : invisible;

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
    const response = await postProducts(newProduct, imgUrl);
    if (response.created) {
      showCreateNotification(
        `Se creó exitosamente el producto ${response.product.name}`
      );
      navigate("/admin/manageProducts");
    }
  };

  const handlerDisabledButton = (event) => {
    event.preventDefault();
    disabledSubmitValidator(newProduct, errors, setErrors);
  };

  return (
    <div
      className={`rounded-lg flex flex-col w-full items-center gap-2 ${transition_200} ${form_visibility}`}
    >
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
          {disabled ? (
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
              disabled={disabled}
              className="px-8 py-3 bg-lime-500 bg-opacity-90 text-white text-[12px] md:text-[18px] font-bold rounded-md hover:bg-lime-600 hover:scale-105 focus:outline-none focus:ring-2 focus:bg-lime-500 focus:ring-lime-500 focus:scale-95"
            >
              CREAR
            </button>
          )}
        </div>
      </form>
      <Link
        to="/admin/manageProducts"
        className="px-6 py-3 text-[12px] md:text-[18px] bg-red-300 text-white font-bold rounded-md hover:bg-red-400 hover:ring-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
      >
        VOLVER
      </Link>
    </div>
  );
};

export default CreateNewProduct;
