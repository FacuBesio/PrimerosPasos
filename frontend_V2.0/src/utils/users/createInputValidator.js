function createInputValidator(newUser, errors) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };
  let flag = false;

  if (newUser.role !== "") {
    errors_aux = { ...errors_aux, role: false, role_message: "" };
  } else if (errors.hasOwnProperty("role") && newUser.role === "") {
    errors_aux = { ...errors_aux, role: true, role_message: obligatoryField };
    flag = true;
  } else if (newUser.role === "") {
    flag = true;
  }

  return { errors_states: errors_aux, disabled_result: flag };
}

export default createInputValidator;
