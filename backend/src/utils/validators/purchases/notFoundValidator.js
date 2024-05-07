const jsonPurchasesError = require("./errors/jsonPurchasesError");

const notFoundValidator = (queryInputs) => {
  const { filterOrders, filterUsers, sortId } = queryInputs;

  if (filterOrders.length > 0 && filterUsers.length > 0) {
    return jsonPurchasesError(`No existen resultados para esa combinación de valores en los filtros`);
  }

  if (filterOrders.length > 0) {
    return jsonPurchasesError(`No se ha encontrado ninguna Compra que contenga una Orden con los siguientes id: '${filterOrders}'`);
  }

  if (filterUsers.length > 0) {
    return jsonPurchasesError(`No se ha encontrado ninguna Compra relacionada con los siguientes id de Usuarios: '${filterUsers}'`);
  }

  if (sortId !== "") {
    return jsonPurchasesError(`La tabla de compras se encuentra actualmente vacía, no hay compras para ordenar por id.`);
  }
};

module.exports = notFoundValidator;
