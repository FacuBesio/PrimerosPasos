const { Product } = require("../../db");
const findProductbyId = require("./findProductbyId");
const findCategorybyId = require("../Categories/findCategorybyId");
const errorsValidator = require("../../utils/validators/products/errors/errorsValidator");

const createProduct = async ({ product, categories }) => {
  try {
    if (!categories || categories.length === 0)
      throw new Error("Debe asignar al menos una categoría al producto.");

    for (const category of categories) {
      const categoryTest = await findCategorybyId(category);
      if (!categoryTest)
        throw new Error(
          `La categoría con id '${category}' no existe. Por favor ingresa un categoría válida.`
        );
    }

    const newProduct = await Product.create(product);
    await newProduct.addCategories(categories);
    const { id } = newProduct
    const createdProduct = await findProductbyId(id);
    console.log(createdProduct.dataValues);
    return createdProduct.dataValues;
  } catch (error) {
    console.log("error: ", error.message);
   const errorMessage = errorsValidator(product, categories, error);
    return { message: errorMessage };
  }
};

module.exports = createProduct;
