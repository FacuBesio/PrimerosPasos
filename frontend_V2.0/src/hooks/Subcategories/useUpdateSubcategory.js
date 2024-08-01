import { useEffect, useState } from "react";
import createInputValidator from "../../utils/subcategories/createInputValidator";
import getSubcategoryById from "../../services/Subcategories/getSubcategoryById";
import formatSubcategory_toUpdate from "../../utils/subcategories/formatSubcategory_toUpdate";

const useUpdateSubcategory = (id) => {
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [updateSubcategory, setUpdateSubcategory] = useState({});

  let isSubcategoryLoaded;
  updateSubcategory.hasOwnProperty("id")
    ? (isSubcategoryLoaded = true)
    : (isSubcategoryLoaded = false);

  useEffect(() => {
    setTimeout(() => {
      getSubcategoryById(id).then((data) => {
        const { subcategory } = data;
        const { current_subcategory } = formatSubcategory_toUpdate(subcategory);
        setUpdateSubcategory(current_subcategory);
      });
      window.scrollTo(0, 0);
    }, 200);
  }, [id]);

  useEffect(() => {
    const { errors_states, disabled_result } = createInputValidator(
      updateSubcategory,
      errors
    );
    setErrors(errors_states);
    setDisabled(disabled_result);
  }, [updateSubcategory]);

  return {
    updateSubcategory,
    setUpdateSubcategory,
    disabled,
    setDisabled,
    errors,
    setErrors,
    isSubcategoryLoaded,
  };
};

export default useUpdateSubcategory;
