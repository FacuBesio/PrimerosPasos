function createInputValidator(newProduct, errors, setErrors, setDisabledButton) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };
  let flag = false

  if (newProduct.brand !== "") {
    errors_aux = { ...errors_aux, brand: false, brand_message: "" };
  } else if (errors.hasOwnProperty("brand") && newProduct.brand === "") {
    errors_aux = { ...errors_aux, brand: true, brand_message: obligatoryField };
    flag = true
  } else if (newProduct.brand === ""){
    flag = true
  }

  if (newProduct.name !== "") {
    errors_aux = { ...errors_aux, name: false, name_message: "" };
  } else if (errors.hasOwnProperty("name") && newProduct.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
    flag = true
  } else if (newProduct.name === ""){
    flag = true
  }

  if (newProduct.category !== "") {
    errors_aux = { ...errors_aux, category: false, category_message: "" };
  } else if (errors.hasOwnProperty("category") && newProduct.category === "") {
    errors_aux = { ...errors_aux, category: true, category_message: obligatoryField };
    flag = true
  } else if (newProduct.category === ""){
    flag = true
  }

  if (newProduct.color !== "") {
    errors_aux = { ...errors_aux, color: false, color_message: "" };
  } else if (errors.hasOwnProperty("color") && newProduct.color === "") {
    errors_aux = { ...errors_aux, color: true, color_message: obligatoryField };
    flag = true
  } else if (newProduct.color === ""){
    flag = true
  }

  if (newProduct.size !== "") {
    errors_aux = { ...errors_aux, size: false, size_message: "" };
  } else if (errors.hasOwnProperty("size") && newProduct.size === "") {
    errors_aux = { ...errors_aux, size: true, size_message: obligatoryField };
    flag = true
  } else if (newProduct.size === ""){
    flag = true
  }
  
  if (newProduct.description !== "") {
    errors_aux = { ...errors_aux, description: false, description_message: "" };
  } else if (
    errors.hasOwnProperty("description") &&
    newProduct.description === ""
  ) {
    errors_aux = {
      ...errors_aux,
      description: true,
      description_message: obligatoryField,
    };
    flag = true
  } else if (newProduct.description === ""){
    flag = true
  }

  if (newProduct.price !== "") {
    errors_aux = { ...errors_aux, price: false, price_message: "" };
  } else if (errors.hasOwnProperty("price") && newProduct.price === "") {
    errors_aux = { ...errors_aux, price: true, price_message: obligatoryField };
    flag = true
  } else if (newProduct.price === ""){
    flag = true
  }

  if (newProduct.stock !== "") {
    errors_aux = { ...errors_aux, stock: false, stock_message: "" };
  } else if (errors.hasOwnProperty("stock") && newProduct.stock === "") {
    errors_aux = { ...errors_aux, stock: true, stock_message: obligatoryField };
    flag = true
  } else if (newProduct.stock === ""){
    flag = true
  }

  setErrors(errors_aux);
  setDisabledButton(flag)
}

export default createInputValidator;
