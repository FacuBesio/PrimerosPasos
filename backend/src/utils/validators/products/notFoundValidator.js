const jsonProductsError = require("./errors/jsonProductsError");
const multipleInputValidator = require("./multipleInputValidator");


const notFoundValidator = (queryInputs) => {
  const {
    brand_or_name,
    filterName,
    filterColor,
    filterSize,
    filterBrands,
    filterCategories,
    filterPrice,
    sortBrand,
    sortId,
    sortName,
    sortPrice,
    sortRating,
  } = queryInputs;
 
  if(multipleInputValidator(queryInputs)){
    return jsonProductsError(`No existen resultados para esa combinación de valores en los filtros.`);
  }
  
  if (brand_or_name !== "") {
    return jsonProductsError(`No se ha encontrado ningún Producto que contenga una marca o nombre que coincida con la palabra '${brand_or_name}'`);
  }

  if (filterName !== "") {
    return jsonProductsError(`No se ha encontrado ningún Producto que coincida con el nombre '${filterName}'`);
  }

  if (filterColor !== "") {
    return jsonProductsError(`No se ha encontrado ningún Producto que coincida con el color '${filterColor}'`);
  }

  if (filterSize !== "") {
    return jsonProductsError(`No se ha encontrado ningún Producto que coincida con el talle '${filterSize}'`);
  }

  if (filterBrands !== "" || filterBrands.length > 0) {
    return jsonProductsError(`No se ha encontrado ningún Producto que contenga una marca que coincida con las siguientes marcas: '${filterBrands}'`);
  }

  if (filterCategories.length > 0) {
    return jsonProductsError(`No se ha encontrado ningún Producto que contenga una categoría que coincida con los siguientes id: '${filterCategories}'`);
  }

  if (filterPrice instanceof Array && filterPrice.length === 2) {
    return jsonProductsError(`No se ha encontrado ningún Producto que contenga un precio que coincida entre los siguientes valores: '${filterPrice}'`);
  }

  if (sortBrand !== "") {
    return jsonProductsError(`La tabla de productos se encuentra actualmente vacía, no hay productos para ordenar por marca.`);
  }

  if (sortId !== "") {
    return jsonProductsError(`La tabla de productos se encuentra actualmente vacía, no hay productos para ordenar por id.`);
  }

  if (sortName !== "") {
    return jsonProductsError(`La tabla de productos se encuentra actualmente vacía, no hay productos para ordenar por nombre.`);
  }

  if (sortPrice !== "") {
    return jsonProductsError(`La tabla de productos se encuentra actualmente vacía, no hay productos para ordenar por precio.`);
  }

  if (sortRating !== "") {
    return jsonProductsError(`La tabla de productos se encuentra actualmente vacía, no hay productos para ordenar por rating.`);
  }
};

module.exports = notFoundValidator;
