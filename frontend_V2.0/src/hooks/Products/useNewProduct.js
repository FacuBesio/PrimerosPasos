import { useEffect, useState } from "react";
import createInputValidator from "../../utils/products/createInputValidator";

const useNewProduct = () => {
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
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
    const { errors_states, disabled_result } = createInputValidator(
      newProduct,
      errors
    );
    setErrors(errors_states);
    setDisabled(disabled_result);
  }, [newProduct]);

  return {
    newProduct,
    setNewProduct,
    disabled,
    setDisabled,
    errors,
    setErrors,
  };
};

export default useNewProduct;
