const categoriesValidator = require("./categoriesValidator");
const formattedProduct = require("../../formatted/formattedProduct");
const findProductbyId = require("../../../controllers/Products/findProductbyId");

const paramsValidator = async (id, categories) => {
  let currentCategoryId;
  let currentProduct = await findProductbyId(id);

  const statusToUpdate = {
    error: false,
    message: "",
    currentProduct: null,
    category_id: null,
    subcategory_id: null,
    isCategoryNew: null,
  };

  if (!currentProduct) {
    statusToUpdate.error = true;
    statusToUpdate.message = `Producto ${id} no encontrado`;
    return statusToUpdate;
  }
  currentProduct = formattedProduct(currentProduct);
  currentProduct.categories.forEach((category) => {
    currentCategoryId = category.id;
  });
  statusToUpdate.currentProduct = currentProduct;

  if (categories) {
    const categoriesResult = await categoriesValidator(categories);
    if (categoriesResult.error) {
      statusToUpdate.error = true;
      statusToUpdate.message = categoriesResult.message;
      return statusToUpdate;
    }
    if (categories.length === 1) {
      statusToUpdate.category_id = categories[0];
      statusToUpdate.isCategoryNew = categories[0] !== currentCategoryId;
      return statusToUpdate;
    }

    if (categories.length === 2) {
      statusToUpdate.category_id = categories[0];
      statusToUpdate.subcategory_id = categories[1];
      statusToUpdate.isCategoryNew = categories[0] !== currentCategoryId;
      return statusToUpdate;
    }
  }
};

module.exports = paramsValidator;
