const jsonProductsError = require("./errors/jsonProductsError");

const inputValidator = (queryInputs, paginated) => {
  const {
    filterCategories,
    filterPrice,
    sortBrand,
    sortId,
    sortName,
    sortPrice,
    sortRating,
  } = queryInputs;
  const { page, pageSize } = paginated;

  const query = {
    error: false,
    message: "",
  };

  if (isNaN(page) || isNaN(pageSize)) {
    query.error = true;
    query.message = `Los únicos valores válidos para la paginación son números. Se ha ingresado: 'page: ${page}' & 'pageSize: ${pageSize}'`;
  }

  if (filterCategories instanceof Array && filterCategories.length > 0) {
    filterCategories.forEach((element) => {
      if (isNaN(element)) {
        query.error = true;
        query.message = `Los únicos valores válidos para filtrar por Categorías son números (id). Se ha ingresado: '${filterCategories}'`;
      }
    });
  } else if (isNaN(filterCategories)) {
    query.error = true;
    query.message = `Los únicos valores válidos para filtrar por Categorías son números (id). Se ha ingresado: '${filterCategories}'`;
  }

  if (!(filterPrice instanceof Array)) {
    query.error = true;
    query.message = `Debe ingresar dos valores para utilizar el filtrado por precios`;
  } else if (filterPrice.length > 2) {
    query.error = true;
    query.message = `Debe ingresar únicamente dos valores para utilizar el filtrado por precios.`;
  }

  if (
    sortBrand !== "" &&
    sortBrand.toUpperCase() !== "ASC" &&
    sortBrand.toUpperCase() !== "DESC"
  ) {
    query.error = true;
    query.message = `Los únicos valores válidos para ordenar los productos por marca son 'ASC' o 'DESC'. Se ha ingresado como valor: '${sortBrand}'`;
  }

  if (
    sortId !== "" &&
    sortId.toUpperCase() !== "ASC" &&
    sortId.toUpperCase() !== "DESC"
  ) {
    query.error = true;
    query.message = `Los únicos valores válidos para ordenar los productos por id son 'ASC' o 'DESC'. Se ha ingresado como valor: '${sortId}'`;
  }

  if (
    sortName !== "" &&
    sortName.toUpperCase() !== "ASC" &&
    sortName.toUpperCase() !== "DESC"
  ) {
    query.error = true;
    query.message = `Los únicos valores válidos para ordenar los productos por nombre son 'ASC' o 'DESC'. Se ha ingresado como valor: '${sortName}'`;
  }

  if (
    sortPrice !== "" &&
    sortPrice.toUpperCase() !== "ASC" &&
    sortPrice.toUpperCase() !== "DESC"
  ) {
    query.error = true;
    query.message = `Los únicos valores válidos para ordenar los productos por precio son 'ASC' o 'DESC'. Se ha ingresado como valor: '${sortPrice}'`;
  }

  if (
    sortRating !== "" &&
    sortRating.toUpperCase() !== "ASC" &&
    sortRating.toUpperCase() !== "DESC"
  ) {
    query.error = true;
    query.message = `Los únicos valores válidos para ordenar los productos por rating son 'ASC' o 'DESC'. Se ha ingresado como valor: '${sortRating}'`;
  }

  query.message = jsonProductsError(query.message);
  return query;
};

module.exports = inputValidator;
