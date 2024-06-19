function disabledSubmitValidator(newProduct, errors, setErrors) {
  const obligatoryField = "*Campo obligatorio";
  let errors_aux = { ...errors };

  if (newProduct.brand === "") {
    errors_aux = { ...errors_aux, brand: true, brand_message: obligatoryField };
  }

  if (newProduct.name === "") {
    errors_aux = { ...errors_aux, name: true, name_message: obligatoryField };
  }

  if (newProduct.category === "") {
    errors_aux = { ...errors_aux, category: true, category_message: obligatoryField };
  }

  if (newProduct.color === "") {
    errors_aux = { ...errors_aux, color: true, color_message: obligatoryField };
  }

  if (newProduct.size === "") {
    errors_aux = { ...errors_aux, size: true, size_message: obligatoryField };
  }

  if (newProduct.img === "") {
    errors_aux = { ...errors_aux, img: true, img_message: obligatoryField };
  }

  if (newProduct.description === "") {
    errors_aux = { ...errors_aux, description: true, description_message: obligatoryField };
  }

  if (newProduct.price === "") {
    errors_aux = { ...errors_aux, price: true, price_message: obligatoryField };
  }

  if (newProduct.stock === "") {
    errors_aux = { ...errors_aux, stock: true, stock_message: obligatoryField };
  }

  setErrors(errors_aux);
}

export default disabledSubmitValidator;
