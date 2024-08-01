import { useEffect, useState } from "react";
import getCategoryById from "../../services/Categories/getCategoryById";
import createInputValidator from "../../utils/categories/createInputValidator";

const useUpdateCategory = (id) => {
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [updateCategory, setUpdateCategory] = useState({});

  let isCategoryLoaded;
  updateCategory.hasOwnProperty("id")
    ? (isCategoryLoaded = true)
    : (isCategoryLoaded = false);

  useEffect(() => {
    setTimeout(() => {
      getCategoryById(id).then((data) => {
        const { category } = data;
        setUpdateCategory(category);
      });
      window.scrollTo(0, 0);
    }, 200);
  }, [id]);

  useEffect(() => {
    const { errors_states, disabled_result } = createInputValidator(
      updateCategory,
      errors
    );
    setErrors(errors_states);
    setDisabled(disabled_result);
  }, [updateCategory]);

  return {
    updateCategory,
    setUpdateCategory,
    disabled,
    setDisabled,
    errors,
    setErrors,
    isCategoryLoaded,
  };
};

export default useUpdateCategory;
