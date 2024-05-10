const errorsValidator = ({name}, error) => {
  let errorMessage = error.message;

  if (error.message.includes("llave duplicada")) {
    return (errorMessage = `Ya existe una categoría con el nombre '${name}'.`);
  }

  return errorMessage;
};

module.exports = errorsValidator;
