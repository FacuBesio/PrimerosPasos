const { Product, Category } = require("../../db");
const findProductbyId = require("../../controllers/Products/findProductbyId");
const errorsValidator = require("../../utils/validators/products/errors/errorsValidator");
const paramsValidator = require("../../utils/validators/products/paramsValidator");

const modifyProduct = async (putBody) => {
  const {
    id,
    brand,
    name,
    color,
    size,
    img,
    description,
    price,
    stock,
    rating,
    enabled,
    categories,
  } = putBody;

  const statusToUpdate = await paramsValidator(id, categories);
  if (statusToUpdate.error) {
    return { message: statusToUpdate.message };
  }
  const { currentProduct, category_id, subcategory_id, isCategoryNew } =
    statusToUpdate;

  let clearSubcaterogies = false;
  let currentSubcategories;
  if (currentProduct.subcategories.length > 0 && isCategoryNew) {
    clearSubcaterogies = true;
    currentSubcategories = currentProduct.subcategories.map((subcategorie) => {
      return subcategorie.id;
    });
  }

  try {
    let updatedProduct = await Product.update(
      {
        brand,
        name,
        color,
        size,
        img,
        description,
        price,
        stock,
        rating,
        enabled,
      },
      { where: { id: id } }
    );

    updatedProduct = await Product.findByPk(id);
    clearSubcaterogies &&
      (await updatedProduct.removeSubcategories(currentSubcategories));
    category_id && (await updatedProduct.setCategories(category_id));
    subcategory_id && (await updatedProduct.setSubcategories(subcategory_id));
    updatedProduct = await findProductbyId(id);
    return updatedProduct.dataValues;
  } catch (error) {
    console.log("error: ", error.message);
    const errorMessage = errorsValidator(putBody, categories, error);
    return { message: errorMessage };
  }
};

module.exports = modifyProduct;
