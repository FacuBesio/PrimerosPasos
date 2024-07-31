import { useEffect, useState } from "react";
import getProductById from "../../services/Products/getProductById";
import createInputValidator from "../../utils/products/createInputValidator";
import formatProduct_toUpdate from "../../utils/products/formatProduct_toUpdate";

const useUpdateProduct = (id) => {
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [updateProduct, setUpdateProduct] = useState({});

  let isProductLoaded;
  updateProduct.hasOwnProperty("id")
    ? (isProductLoaded = true)
    : (isProductLoaded = false);

  useEffect(() => {
    setTimeout(() => {
      getProductById(id).then((data) => {
        const { product } = data;
        const { current_product } = formatProduct_toUpdate(product);
        setUpdateProduct(current_product);
      });
      window.scrollTo(0, 0);
    }, 200);
  }, [id]);

  useEffect(() => {
    const { errors_states, disabled_result } = createInputValidator(
      updateProduct,
      errors
    );
    setErrors(errors_states);
    setDisabled(disabled_result);
  }, [updateProduct]);

  return {
    updateProduct,
    setUpdateProduct,
    disabled,
    setDisabled,
    errors,
    setErrors,
    isProductLoaded
  };
};

export default useUpdateProduct;
