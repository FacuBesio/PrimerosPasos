const { Product, Category } = require("../../db");
const findProductbyId = require("../../controllers/Products/findProductbyId");
const findCategorybyId = require("../../controllers/Categories/findCategorybyId");
const errorsValidator = require("../../utils/validators/products/errors/errorsValidator");

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

  if (categories) {
    for (const category of categories) {
      const categoryTest = await findCategorybyId(category);
      if (!categoryTest)
        return {
          message: `La categoría con id '${category}' no existe. Por favor ingresa un categoría válida.`,
        };
    }
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

    if (updatedProduct[0] === 0) {
      return { message: `Producto ${id} no encontrado` };
    }
    updatedProduct = await Product.findByPk(id);
    categories &&
      categories.length > 0 &&
      (await updatedProduct.setCategories(categories));
    updatedProduct = await findProductbyId(id);

    return updatedProduct.dataValues;
  } catch (error) {
    console.log("error: ", error.message);
    const errorMessage = errorsValidator(putBody, categories, error);
    return { message: errorMessage };
  }
};

module.exports = modifyProduct;
