function createInputValidator(newCategory, errors) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };
  let flag = false;

  if (newCategory.name !== "") {
    errors_aux = { ...errors_aux, name: false, name_message: "" };
  } else if (errors.hasOwnProperty("name") && newCategory.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
    flag = true;
  } else if (newCategory.name === "") {
    flag = true;
  }

  return { errors_states: errors_aux, disabled_result: flag };
}

export default createInputValidator;
