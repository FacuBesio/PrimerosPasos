import { useEffect, useState } from "react";
import createInputValidator from "../../utils/categories/createInputValidator";

const useNewCategory = () => {
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  useEffect(() => {
    const { errors_states, disabled_result } = createInputValidator(
      newCategory,
      errors
    );
    setErrors(errors_states);
    setDisabled(disabled_result);
  }, [newCategory]);

  return {
    newCategory,
    setNewCategory,
    disabled,
    setDisabled,
    errors,
    setErrors,
  };
};

export default useNewCategory;
