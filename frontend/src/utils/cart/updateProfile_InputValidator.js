function updateProfile_InputValidator(user, errors, setErrors, setDisabledButton) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };
  let flag = true

   if (user.name !== "" && user.name !== null) {
    errors_aux = { ...errors_aux, name: false, name_message: "" };
    flag = false
  } else if (errors.hasOwnProperty("name") && user.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
    flag = true
  } else if (user.name === ""){
    flag = true
  }

  if (user.email !== "" && user.email !== null) {
    errors_aux = { ...errors_aux, email: false, email_message: "" };
    flag = false
  } else if (errors.hasOwnProperty("email") && user.email === "") {
    errors_aux = { ...errors_aux, email: true, email_message: obligatoryField };
    flag = true
  } else if (user.email === ""){
    flag = true
  }

  if (user.country !== "" && user.country !== null) {
    errors_aux = { ...errors_aux, country: false, country_message: "" };
    flag = false
  } else if (errors.hasOwnProperty("country") && user.country === "") {
    errors_aux = { ...errors_aux, country: true, country_message: obligatoryField };
    flag = true
  } else if (user.country === "" || user.country === null ){
    flag = true
  }

  if (user.state !== "" && user.state !== null) {
    errors_aux = { ...errors_aux, state: false, state_message: "" };
    flag = false
  } else if (errors.hasOwnProperty("state") && user.state === "") {
    errors_aux = { ...errors_aux, state: true, state_message: obligatoryField };
    flag = true
  } else if (user.state === "" || user.state === null){
    flag = true
  }

  if (user.city !== "" && user.city !== null) {
    errors_aux = { ...errors_aux, city: false, city_message: "" };
    flag = false
  } else if (errors.hasOwnProperty("city") && user.city === "") {
    errors_aux = { ...errors_aux, city: true, city_message: obligatoryField };
    flag = true
  } else if (user.city === "" || user.city === null){
    flag = true
  }

  if (user.ZIP_Code !== "" && user.ZIP_Code !== null) {
    errors_aux = { ...errors_aux, ZIP_Code: false, ZIP_Code_message: "" };
    flag = false
  } else if (errors.hasOwnProperty("ZIP_Code") && user.ZIP_Code === "") {
    errors_aux = { ...errors_aux, ZIP_Code: true, ZIP_Code_message: obligatoryField };
    flag = true
  } else if (user.ZIP_Code === "" || user.ZIP_Code === null){
    flag = true
  }
  
  if (user.street_address !== "" && user.street_address !== null) {
    errors_aux = { ...errors_aux, street_address: false, street_address_message: "" };
    flag = false
  } else if (errors.hasOwnProperty("street_address") && user.street_address === "") {
    errors_aux = { ...errors_aux, street_address: true, street_address_message: obligatoryField };
    flag = true
  } else if (user.street_address === "" || user.street_address === null){
    flag = true
  }

  if (user.street_number !== "" && user.street_number !== null) {
    errors_aux = { ...errors_aux, street_number: false, street_number_message: "" };
    flag = false
  } else if (errors.hasOwnProperty("street_number") && user.street_number === "") {
    errors_aux = { ...errors_aux, street_number: true, street_number_message: obligatoryField };
    flag = true
  } else if (user.street_number === "" || user.street_number === null){
    flag = true
  }

  if (user.phone !== "" && user.phone !== null) {
    errors_aux = { ...errors_aux, phone: false, phone_message: "" };
    flag = false
  } else if (errors.hasOwnProperty("phone") && user.phone === "") {
    errors_aux = { ...errors_aux, phone: true, phone_message: obligatoryField };
    flag = true
  } else if (user.phone === "" || user.phone === null){
    flag = true
  }
console.log("FLAAAAAG:", flag);
  setErrors(errors_aux);
  setDisabledButton(flag)
}

export default updateProfile_InputValidator;
