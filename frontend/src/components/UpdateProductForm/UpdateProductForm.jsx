import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import putProducts from "../../utils/products/putProducts";
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
import getProductById_forUpdate from "../../utils/products/getProductById_forUpdate";
import Enabled_input from "./InputsForm/Enabled_input";

const UpdateProductForm = ({ id }) => {
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

  console.log("newProduct: ", newProduct);
  console.log("errors: ", errors);

  useEffect(() => {
    getProductById_forUpdate(id, setNewProduct);
  }, []);

  useEffect(() => {
    createInputValidator(newProduct, errors, setErrors, setDisabledButton);
  }, [newProduct]);

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    if (event.target.type === "file") {
      value = event.target.files[0];
    }
    setNewProduct({ ...newProduct, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    let imgUrl;
    if (typeof newProduct.img === "string") {
      imgUrl = newProduct.img;
    } else if (newProduct.img instanceof File) {
      imgUrl = await uploadImageCloudinary(newProduct.img);
    } else {
      console.error("El tipo de newProduct.img no es válido");
    }
    putProducts(newProduct, imgUrl, navigate);
  };

  const handlerDisabledButton = (event) => {
    event.preventDefault();
    disabledSubmitValidator(newProduct, errors, setErrors);
  };

  return (
    <div className="w-full rounded-lg flex flex-col items-center p-4 gap-5">
      <form
        className="w-1/2 bg-gray-600 bg-opacity-75 rounded-lg px-4 p-8 flex flex-col items-center"
        onSubmit={handlerSubmit}
      >
        <h1 className="text-white font-bold pt-2 text-xl rounded-md">
          ACTUALIZAR PRODUCTO
        </h1>
        <div className="w-full flex flex-col gap-1 items-center">
          <Enabled_input
            newProduct={newProduct}
            setNewProduct={setNewProduct}
          />
          <Brand_input
            handlerChange={handlerChange}
            errors={errors}
            newProduct={newProduct}
          />
          <Name_input
            handlerChange={handlerChange}
            errors={errors}
            newProduct={newProduct}
          />
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
          <Description_input
            handlerChange={handlerChange}
            errors={errors}
            newProduct={newProduct}
          />
          <Price_input
            handlerChange={handlerChange}
            errors={errors}
            newProduct={newProduct}
          />
          <Stock_input
            handlerChange={handlerChange}
            errors={errors}
            newProduct={newProduct}
          />
          <Image_input handlerChange={handlerChange} errors={errors} />
        </div>

        <div className="formButton w-full flex justify-center items-center ">
          {disabledButton ? (
            <button
              id="buttonDisabled"
              onClick={handlerDisabledButton}
              className="px-8 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              ACTUALIZAR
            </button>
          ) : (
            <button
              type="submit"
              id="buttonEnabled"
              disabled={disabledButton}
              className="px-8 py-3 bg-green-500 bg-opacity-90 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              ACTUALIZAR
            </button>
          )}
        </div>
      </form>
      <Link
        to="/admin/manageProducts"
        className="px-6 py-3 bg-red-300 text-white font-bold rounded-md hover:bg-red-400
        hover:ring-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
      >
        VOLVER
      </Link>
    </div>
  );
};

export default UpdateProductForm;
