const jsonUsersError = require("./errors/jsonUsersError");

const inputValidator = (queryInputs, paginated) => {
  const { sortId } = queryInputs;
  const { page, pageSize } = paginated;

  const query = {
    error : false,
    message: ""
  }

  if (isNaN(page) || isNaN(pageSize)) {
    query.error = true;
    query.message = `Los únicos valores válidos para la paginación son números. Se ha ingresado: 'page: ${page}' & 'pageSize: ${pageSize}'`;
  }

  if (
    sortId !== "" &&
    sortId.toUpperCase() !== "ASC" &&
    sortId.toUpperCase() !== "DESC"
  ) {
    query.error = true;
    query.message = `Los únicos valores válidos para organizar los usuarios por id son 'ASC' o 'DESC'. Se ha ingresado como valor: '${sortId}'`
  }

  query.message = jsonUsersError(query.message)  

  return query;
};

module.exports = inputValidator;
