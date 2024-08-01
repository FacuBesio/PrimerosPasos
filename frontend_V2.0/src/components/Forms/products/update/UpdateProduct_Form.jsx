import { useNavigate } from "react-router-dom";
import useUpdateProduct from "../../../../hooks/Products/useUpdateProduct";
import eventValidator from "../../../../utils/products/eventValidator";
import image_validator from "../../../../utils/products/image_validator";
import putProducts from "../../../../services/Products/putProducts";
import showUpdateNotification from "../../../../utils/products/showUpdateNotification";
import Enabled_input from "./InputsForm/Enabled_input";
import BrandAndName_input from "./InputsForm/BrandAndName_input";
import ColorAndSize_input from "./InputsForm/ColorAndSize_input";
import StockAndPrice_input from "./InputsForm/StockAndPrice_input";
import CategoriesAndImage_input from "./InputsForm/CategoriesAndImage_input";
import Description_input from "./InputsForm/Description_input";
import { disabled_button, enabled_button } from "../../../../styles";

const UpdateProduct_Form = ({ id }) => {
  const navigate = useNavigate();
  const { updateProduct, setUpdateProduct, errors, isProductLoaded, disabled } =
    useUpdateProduct(id);

  const handlerChange = (event) => {
    const inputData = eventValidator(event);
    setUpdateProduct({ ...updateProduct, ...inputData });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const imgUrl = await image_validator(updateProduct.img);
    const response = await putProducts(updateProduct, imgUrl);
    if (response.updated) {
      showUpdateNotification(
        `Se actualizó exitosamente el producto ${response.product.name}`
      );
      navigate("/admin/manageProducts");
    }
  };

  return (
    <form
      className=" bg-gray-600 bg-opacity-75 p-4 rounded-lg flex flex-col items-center w-1/2"
      onSubmit={handlerSubmit}
    >
      <h1 className="text-white font-bold py-2 rounded-md text-[18px] md:text-[22px]">
        ACTUALIZAR PRODUCTO
      </h1>
      <div className="w-full flex flex-col gap-3 items-center">
        <Enabled_input
          updateProduct={updateProduct}
          setUpdateProduct={setUpdateProduct}
        />

        <BrandAndName_input
          handlerChange={handlerChange}
          errors={errors}
          updateProduct={updateProduct}
        />

        <ColorAndSize_input
          handlerChange={handlerChange}
          updateProduct={updateProduct}
          errors={errors}
        />

        <StockAndPrice_input
          handlerChange={handlerChange}
          errors={errors}
          updateProduct={updateProduct}
        />

        <CategoriesAndImage_input
          handlerChange={handlerChange}
          updateProduct={updateProduct}
          errors={errors}
        />

        <Description_input
          handlerChange={handlerChange}
          errors={errors}
          updateProduct={updateProduct}
        />
      </div>

      <div className="formButton w-full flex justify-center mb-2 items-center">
        {disabled ? (
          <button
            id="buttonDisabled"
            disabled={disabled}
            className={disabled_button}
          >
            ACTUALIZAR
          </button>
        ) : (
          <button
            type="submit"
            id="buttonEnabled"
            className={enabled_button}
          >
            ACTUALIZAR
          </button>
        )}
      </div>
    </form>
  );
};

export default UpdateProduct_Form;
