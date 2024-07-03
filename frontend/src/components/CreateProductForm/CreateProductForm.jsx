import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postProducts from "../../utils/products/postProducts";
import uploadImageCloudinary from "../../utils/products/uploadImageCloudinary";
import Brand_input from "./InputsForm/Brand_input";
import Name_input from "./InputsForm/Name_input";
import Categories_input from "./InputsForm/Categories_input";
import Color_input from "./InputsForm/Color_input";
import Size_input from "./InputsForm/Size_input";
import Image_input from "./InputsForm/Image_input";
import Description_input from "./InputsForm/Description_input";
import Price_input from "./InputsForm/Price_input";
import Stock_input from "./InputsForm/Stock_input";
import createInputValidator from "../../utils/products/createInputValidator";
import disabledSubmitValidator from "../../utils/products/disabledSubmitValidator";

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
    <div className=" rounded-lg flex flex-col items-center  gap-2 pl-14 pr-2 h-screen">
      <form
        className=" bg-gray-600 bg-opacity-75 rounded-lg  flex flex-col items-center w-48 md:w-full"
        onSubmit={handlerSubmit}
      >
        <h1 className="text-white font-bold  py-2 rounded-md text-[18px] md:text-[22px]">
          CREAR PRODUCTO
        </h1>
        <div className="w-full md:grid md:grid-cols-3 lg:grid-cols-4  flex flex-col   items-center">
          <Brand_input handlerChange={handlerChange} errors={errors} />
          <Name_input handlerChange={handlerChange} errors={errors} />
          <Categories_input
            handlerChange={handlerChange}
            newProduct={newProduct}
            errors={errors}
          />
          <Color_input
            handlerChange={handlerChange}
            newProduct={newProduct}
            errors={errors}
          />
          <Size_input
            handlerChange={handlerChange}
            newProduct={newProduct}
            errors={errors}
          />
          <Image_input handlerChange={handlerChange} errors={errors} />
          <Description_input handlerChange={handlerChange} errors={errors} />
          <Price_input handlerChange={handlerChange} errors={errors} />
          <Stock_input handlerChange={handlerChange} errors={errors} />
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