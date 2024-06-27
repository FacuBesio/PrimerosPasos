function createInputValidator(user, errors, setErrors, setDisabledButton) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };
  let flag = false
  
  if (user.name !== "") {
    errors_aux = { ...errors_aux, name: false, name_message: "" };
  } else if (errors.hasOwnProperty("name") && user.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
    flag = true
  } else if (user.name === ""){
    flag = true
  }

  if (user.email !== "") {
    errors_aux = { ...errors_aux, email: false, email_message: "" };
  } else if (errors.hasOwnProperty("email") && user.email === "") {
    errors_aux = { ...errors_aux, email: true, email_message: obligatoryField };
    flag = true
  } else if (user.email === ""){
    flag = true
  }

  setErrors(errors_aux);
  setDisabledButton(flag)
}

export default createInputValidator;









