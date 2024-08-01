function createInputValidator(newSubcategory, errors, setErrors, setDisabledButton) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };
  let flag = false

  if (newSubcategory.name !== "") {
    errors_aux = { ...errors_aux, name: false, name_message: "" };
  } else if (errors.hasOwnProperty("name") && newSubcategory.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
    flag = true
  } else if (newSubcategory.name === ""){
    flag = true
  }

  if (newSubcategory.category !== "") {
    errors_aux = { ...errors_aux, category: false, category_message: "" };
  } else if (errors.hasOwnProperty("category") && newSubcategory.category === "") {
    errors_aux = { ...errors_aux, category: true, category_message: obligatoryField };
    flag = true
  } else if (newSubcategory.category === ""){
    flag = true
  }

  return { errors_states: errors_aux, disabled_result: flag };
}

export default createInputValidator;
