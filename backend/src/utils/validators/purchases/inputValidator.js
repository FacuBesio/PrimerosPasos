const jsonPurchasesError = require("./errors/jsonPurchasesError")

const inputValidator = (queryInputs, paginated) => {
  const { sortId, sortUsers} = queryInputs;
  const { page, pageSize } = paginated;

  const query = {
    error : false,
    message: ""
  }

  if (isNaN(page) || isNaN(pageSize)) {
    query.error = true;
    query.message = `Los únicos valores válidos para la paginación son números. Se ha ingresado: 'page: ${page}' & 'pageSize: ${pageSize}'.`;
  }

  if (
    sortId !== "" &&
    sortId.toUpperCase() !== "ASC" &&
    sortId.toUpperCase() !== "DESC"
  ) {
    query.error = true;
    query.message = `Los únicos valores válidos para ordenar las compras por id son 'ASC' o 'DESC'. Se ha ingresado como valor: '${sortId}'.`
  }

  if (
    sortUsers !== "" &&
    sortUsers.toUpperCase() !== "ASC" &&
    sortUsers.toUpperCase() !== "DESC"
  ) {
    query.error = true;
    query.message = `Los únicos valores válidos para ordenar las compras por usuarios son 'ASC' o 'DESC'. Se ha ingresado como valor: '${sortUsers}'`
  }

  query.message = jsonPurchasesError(query.message);

  return query;
};

module.exports = inputValidator;
