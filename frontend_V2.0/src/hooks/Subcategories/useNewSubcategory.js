import { useEffect, useState } from "react";
import createInputValidator from "../../utils/subcategories/createInputValidator";

const useNewSubcategory = () => {
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [newSubcategory, setNewSubcategory] = useState({
    name: "",
    category: "",
  });

  useEffect(() => {
    const { errors_states, disabled_result } = createInputValidator(
      newSubcategory,
      errors
    );
    setErrors(errors_states);
    setDisabled(disabled_result);
  }, [newSubcategory]);

  return {
    newSubcategory,
    setNewSubcategory,
    disabled,
    setDisabled,
    errors,
    setErrors,
  };
};

export default useNewSubcategory;
