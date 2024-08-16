function createInputValidator(user, errors, cartNavegationActive) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };
  let flag = false;

  if (user.name !== "") {
    errors_aux = { ...errors_aux, name: false, name_message: "" };
  } else if (errors.hasOwnProperty("name") && user.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
    flag = true;
  } else if (user.name === "") {
    flag = true;
  }

  if (user.email !== "") {
    errors_aux = { ...errors_aux, email: false, email_message: "" };
  } else if (errors.hasOwnProperty("email") && user.email === "") {
    errors_aux = { ...errors_aux, email: true, email_message: obligatoryField };
    flag = true;
  } else if (user.email === "") {
    flag = true;
  }

  if (user.country !== "" && cartNavegationActive) {
    errors_aux = { ...errors_aux, country: false, country_message: "" };
  } else if (errors.hasOwnProperty("country") && user.country === "") {
    errors_aux = {
      ...errors_aux,
      country: true,
      country_message: obligatoryField,
    };
    flag = true;
  } else if (user.country === "") {
    flag = true;
  }

  if (user.state !== "" && cartNavegationActive) {
    errors_aux = { ...errors_aux, state: false, state_message: "" };
  } else if (errors.hasOwnProperty("state") && user.state === "") {
    errors_aux = { ...errors_aux, state: true, state_message: obligatoryField };
    flag = true;
  } else if (user.state === "") {
    flag = true;
  }

  if (user.city !== "" && cartNavegationActive) {
    errors_aux = { ...errors_aux, city: false, city_message: "" };
  } else if (errors.hasOwnProperty("city") && user.city === "") {
    errors_aux = { ...errors_aux, city: true, city_message: obligatoryField };
    flag = true;
  } else if (user.city === "") {
    flag = true;
  }

  if (user.ZIP_Code !== "" && cartNavegationActive) {
    errors_aux = { ...errors_aux, ZIP_Code: false, ZIP_Code_message: "" };
  } else if (errors.hasOwnProperty("ZIP_Code") && user.ZIP_Code === "") {
    errors_aux = {
      ...errors_aux,
      ZIP_Code: true,
      ZIP_Code_message: obligatoryField,
    };
    flag = true;
  } else if (user.ZIP_Code === "") {
    flag = true;
  }

  if (user.street_address !== "" && cartNavegationActive) {
    errors_aux = {
      ...errors_aux,
      street_address: false,
      street_address_message: "",
    };
  } else if (
    errors.hasOwnProperty("street_address") &&
    user.street_address === ""
  ) {
    errors_aux = {
      ...errors_aux,
      street_address: true,
      street_address_message: obligatoryField,
    };
    flag = true;
  } else if (user.street_address === "") {
    flag = true;
  }

  if (user.street_number !== "" && cartNavegationActive) {
    errors_aux = {
      ...errors_aux,
      street_number: false,
      street_number_message: "",
    };
  } else if (
    errors.hasOwnProperty("street_number") &&
    user.street_number === ""
  ) {
    errors_aux = {
      ...errors_aux,
      street_number: true,
      street_number_message: obligatoryField,
    };
    flag = true;
  } else if (user.street_number === "") {
    flag = true;
  }

  if (user.phone !== "" && cartNavegationActive) {
    errors_aux = { ...errors_aux, phone: false, phone_message: "" };
  } else if (errors.hasOwnProperty("phone") && user.phone === "") {
    errors_aux = { ...errors_aux, phone: true, phone_message: obligatoryField };
    flag = true;
  } else if (user.phone === "") {
    flag = true;
  }

  return { errors_states: errors_aux, disabled_result: flag };
}

export default createInputValidator;
