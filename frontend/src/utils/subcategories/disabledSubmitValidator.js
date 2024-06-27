function disabledSubmitValidator(newSubCategory, errors, setErrors) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };

  if (newSubCategory.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
  }

  if (newSubCategory.category === "") {
    errors_aux = { ...errors_aux, category: true, category_message: obligatoryField };
  }

  setErrors(errors_aux);
}

export default disabledSubmitValidator;
