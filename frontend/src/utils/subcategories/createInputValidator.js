function createInputValidator(newSubCategory, errors, setErrors, setDisabledButton) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };
  let flag = false

  if (newSubCategory.name !== "") {
    errors_aux = { ...errors_aux, name: false, name_message: "" };
  } else if (errors.hasOwnProperty("name") && newSubCategory.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
    flag = true
  } else if (newSubCategory.name === ""){
    flag = true
  }

  if (newSubCategory.category !== "") {
    errors_aux = { ...errors_aux, category: false, category_message: "" };
  } else if (errors.hasOwnProperty("category") && newSubCategory.category === "") {
    errors_aux = { ...errors_aux, category: true, category_message: obligatoryField };
    flag = true
  } else if (newSubCategory.category === ""){
    flag = true
  }

  setErrors(errors_aux);
  setDisabledButton(flag)
}

export default createInputValidator;
