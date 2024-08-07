const findAll_returnValidator = (rows, page, totalPages) => {
  let message;

  if (rows.length === 0) {
    if (page > totalPages) {
      message = `No se encontraron resultados para esta búsqueda. Se ha ingresado un número de página(${page}) superior al la última(${totalPages}).`;
    } else {
      message = "No se encontraron resultados para esta búsqueda.";
    }
  } else {
    message = "Se ha completado la consulta exitosamente.";
  }
  return { message };
};

module.exports = findAll_returnValidator;
