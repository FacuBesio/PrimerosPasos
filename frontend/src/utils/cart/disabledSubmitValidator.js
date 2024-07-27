
function disabledSubmitValidator(user, errors, setErrors) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };

  if (user.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
  }

  if (user.email === "") {
    errors_aux = { ...errors_aux, email: true, email_message: obligatoryField };
  }

  if (user.country === "" || user.country === null) {
    errors_aux = { ...errors_aux, country: true, country_message: obligatoryField };
  }

  if (user.state === "" || user.state === null) {
    errors_aux = { ...errors_aux, state: true, state_message: obligatoryField };
  }

  if (user.city === "" || user.city === null) {
    errors_aux = { ...errors_aux, city: true, city_message: obligatoryField };
  }

  if (user.ZIP_Code === "" || user.ZIP_Code === null) {
    errors_aux = { ...errors_aux, ZIP_Code: true, ZIP_Code_message: obligatoryField };
  }

  if (user.street_address === "" || user.street_address === null) {
    errors_aux = { ...errors_aux, street_address: true, street_address_message: obligatoryField };
  }

  if (user.street_number === "" || user.street_number === null) {
    errors_aux = { ...errors_aux, street_number: true, street_number_message: obligatoryField };
  }

  if (user.phone === "" || user.phone === null) {
    errors_aux = { ...errors_aux, phone: true, phone_message: obligatoryField };
  }

  setErrors(errors_aux);
}

export default disabledSubmitValidator;
