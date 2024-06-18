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

const CreateForm = () => {
  // let disabledButton = true;
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
    const imgUrl = await uploadImageCloudinary(newProduct.img);
    postProducts(newProduct, imgUrl, navigate);
  };

  const handlerDisabledButton = (event) => {
    event.preventDefault();
    disabledSubmitValidator(newProduct, errors, setErrors);
  };

  return (
    <div className="w-full rounded-lg flex flex-col items-center pt-4 pb-8 px-4">
      <form
        className="w-1/2 bg-gray-600 bg-opacity-75 rounded-lg p-4 flex flex-col items-center  mb-8"
        onSubmit={handlerSubmit}
      >
        <h1 className="text-white font-bold rounded-md p-4">CREAR PRODUCTO</h1>
        <div className="w-full flex flex-col gap-4 items-center">
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
          <Image_input handlerChange={handlerChange} />
          <Description_input handlerChange={handlerChange} errors={errors} />
          <Price_input handlerChange={handlerChange} errors={errors} />
          <Stock_input handlerChange={handlerChange} errors={errors} />
        </div>

        <div className="formButton w-full flex justify-center items-center mt-4">
          {disabledButton ? (
            <button
              // type="submit"
              id="buttonDisabled"
              // disabled={disabledButton}
              onClick={handlerDisabledButton}
              className="px-6 py-3 bg-gray-700 text-red-400 font-bold rounded-md "
            >
              CREAR
            </button>
          ) : (
            <button
              type="submit"
              id="buttonEnabled"
              disabled={disabledButton}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              CREAR
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
  );
};

export default CreateForm;
