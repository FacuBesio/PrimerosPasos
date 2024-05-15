const { Product } = require("../../db");
const findProductbyId = require("./findProductbyId");
const findCategorybyId = require("../Categories/findCategorybyId");
const findSubcategorybyId = require("../Subcategories/findSubcategorybyId");
const errorsValidator = require("../../utils/validators/products/errors/errorsValidator");
const formattedCategory = require("../../utils/formatted/formattedCategory");
const formattedSubcategory = require("../../utils/formatted/formattedSubcategory");
const categoriesValidator = require("../../utils/validators/products/categoriesValidator");

const createProduct = async ({ product, categories }) => {
  try {
    if (!categories || categories.length === 0) {
      return {
        message: `Para crear un producto, debe tener al menos una categoría asociada`,
      };
    }

    const categoriesResult = await categoriesValidator(categories);
    if (categoriesResult.error) {
      return { message: categoriesResult.message };
    }
    const category_id = categories[0];
    const subcategory_id = categories[1];

    const newProduct = await Product.create(product);
    await newProduct.addCategories(category_id);
    await newProduct.addSubcategories(subcategory_id);
    const { id } = newProduct;
    const createdProduct = await findProductbyId(id);
    return createdProduct.dataValues;
  } catch (error) {
    console.log("error: ", error.message);
    const errorMessage = errorsValidator(product, categories, error);
    return { message: errorMessage };
  }
};

module.exports = createProduct;
