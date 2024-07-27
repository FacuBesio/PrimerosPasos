function disabledSubmitValidator(user, errors, setErrors) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };

  if (user.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
  }

  if (user.email === "") {
    errors_aux = { ...errors_aux, email: true, email_message: obligatoryField };
  }

  setErrors(errors_aux);
}

export default disabledSubmitValidator;
