const jsonOrdersError = require("./errors/jsonOrdersError");


const notFoundValidator = (queryInputs) => {
  const { filterPurchases, filterUsers, sortId } = queryInputs;

  if (filterPurchases.length > 0 && filterUsers.length > 0) {
    return jsonOrdersError(`No existen resultados para esa combinación de valores en los filtros`);
  }

  if (filterPurchases.length > 0) {
    return jsonOrdersError(`No se ha encontrado ninguna Orden asociada con la Compra id: '${filterPurchases}'`);
  }
  
  if (filterUsers.length > 0) {
    return jsonOrdersError(`No se ha encontrado ninguna Orden asociada con el Usuario id: '${filterUsers}'`);
  }

  if (sortId !== "") {
    return jsonOrdersError(`La tabla de ordenes se encuentra actualmente vacía, no hay ordenes para ordenar por id.`);
  }
};

module.exports = notFoundValidator;
