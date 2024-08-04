function disabledSubmitValidator(newUser, errors, setErrors) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };

  if (newUser.role === "") {
    errors_aux = { ...errors_aux, role: true, role_message: obligatoryField };
  }

  setErrors(errors_aux);
}

export default disabledSubmitValidator;
