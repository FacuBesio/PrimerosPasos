const errorsValidator = (product, categories, error) => {
  let errorMessage = error.message;
  
  if (error.message.includes("llave duplicada")) {
    return (errorMessage = `Ya existe un producto con el nombre '${product.name}', color '${product.color}' y talle '${product.size}'.`);
  }

  if (
    error.message.includes(
      "la sintaxis de entrada no es válida para tipo integer"
    ) &&
    categories.length > 0
  ) {
    return (errorMessage = `La categoría con id '${categories}' no existe. Por favor ingrese id de categorías validas.`);
  }

  if (error.message.includes("notNull") && error.message.includes("brand")) {
    return (errorMessage = `Para crear un producto debe indicar un marca.`);
  }

  if (error.message.includes("notNull") && error.message.includes("name")) {
    return (errorMessage = `Para crear un producto debe indicar un nombre.`);
  }

  if (error.message.includes("notNull") && error.message.includes("color")) {
    return (errorMessage = `Para crear un producto debe indicar un color.`);
  }

  if (error.message.includes("notNull") && error.message.includes("size")) {
    return (errorMessage = `Para crear un producto debe indicar un size.`);
  }

  if (
    error.message.includes("notNull") &&
    error.message.includes("description")
  ) {
    return (errorMessage = `Para crear un producto debe indicar una descripción.`);
  }

  if (error.message.includes("notNull") && error.message.includes("price")) {
    return (errorMessage = `Para crear un producto debe indicar un precio.`);
  }

  if (error.message.includes("notNull") && error.message.includes("stock")) {
    return (errorMessage = `Para crear un producto debe indicar un stock.`);
  }

  return errorMessage;
};

module.exports = errorsValidator;
