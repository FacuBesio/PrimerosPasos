function createInputValidator(newUser, errors, setErrors, setDisabledButton) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };
  let flag = false

  if (newUser.role !== "") {
    errors_aux = { ...errors_aux, role: false, role_message: "" };
  } else if (errors.hasOwnProperty("role") && newUser.role === "") {
    errors_aux = { ...errors_aux, role: true, role_message: obligatoryField };
    flag = true
  } else if (newUser.role === ""){
    flag = true
  }

  setErrors(errors_aux);
  setDisabledButton(flag)
}

export default createInputValidator;
