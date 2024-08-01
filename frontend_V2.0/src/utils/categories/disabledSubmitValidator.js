function disabledSubmitValidator(newCategory, errors, setErrors) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };

  if (newCategory.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
  }

  setErrors(errors_aux);
}

export default disabledSubmitValidator;
