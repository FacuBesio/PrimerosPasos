const categorySitnaxError = (categories, error) => {
  let errorMessage = error.message;
  let status = 500;
  if (
    error.message.includes(
      "la sintaxis de entrada no es válida para tipo integer"
    ) &&
    categories.length > 0
  ) {
    errorMessage = `La categoría con id '${categories}' no existe. Por favor ingrese id de categorías validas.`;
    status = 200;
  }

  return { errorMessage, status };
};

module.exports = categorySitnaxError;
