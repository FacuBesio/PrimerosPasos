import { useNavigate } from "react-router-dom";
import postProducts from "../../../../services/Products/postProducts";
import uploadImageCloudinary from "../../../../utils/cloudinary/uploadImageCloudinary";
import BrandAndName_input from "./InputsForm/BrandAndName_input";
import CategoriesAndImage_input from "./InputsForm/CategoriesAndImage_input";
import ColorAndSize_input from "./InputsForm/ColorAndSize_input";
import Description_input from "./InputsForm/Description_input";
import StockAndPrice_input from "./InputsForm/StockAndPrice_input";
import useNewProduct from "../../../../hooks/Products/useNewProduct";
import eventValidator from "../../../../utils/products/eventValidator";
import disabledSubmitValidator from "../../../../utils/products/disabledSubmitValidator";
import { disabled_button, enabled_button } from "../../../../styles";
import showCreateNotification from "../../../../utils/products/showCreateNotification";

const CreateProduct_Form = () => {
  const navigate = useNavigate();
  const { newProduct, setNewProduct, errors, setErrors, disabled } =
    useNewProduct();

  const handlerChange = (event) => {
    const inputData = eventValidator(event);
    setNewProduct({ ...newProduct, ...inputData });
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
    <form
      className=" bg-gray-600 bg-opacity-75 p-4 rounded-lg flex flex-col items-center w-1/2"
      onSubmit={handlerSubmit}
    >
      <h1 className="text-white font-bold py-2 rounded-md text-[18px] md:text-[22px]">
        CREAR PRODUCTO
      </h1>
      <div className="w-full flex flex-col gap-3 items-center">
        <BrandAndName_input handlerChange={handlerChange} errors={errors} />
        <ColorAndSize_input
          handlerChange={handlerChange}
          newProduct={newProduct}
          errors={errors}
        />
        <StockAndPrice_input handlerChange={handlerChange} errors={errors} />
        <CategoriesAndImage_input
          handlerChange={handlerChange}
          newProduct={newProduct}
          errors={errors}
        />
        <Description_input handlerChange={handlerChange} errors={errors} />
      </div>

      <div className="formButton w-full flex justify-center mb-2 items-center">
        {disabled ? (
          <button
            id="buttonDisabled"
            onClick={handlerDisabledButton}
            className={disabled_button}
          >
            CREAR
          </button>
        ) : (
          <button type="submit" id="buttonEnabled" className={enabled_button}>
            CREAR
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateProduct_Form;
