const { Product, Category } = require("../../db");
const findProductbyId = require("../../controllers/Products/findProductbyId");
const errorsValidator = require("../../utils/validators/products/errors/errorsValidator");
const categoriesValidator = require("../../utils/validators/products/categoriesValidator");

const modifyProduct = async (putBody) => {
  let category_id;
  let subcategory_id;

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
    const categoriesResult = await categoriesValidator(categories);
    if (categoriesResult.error) {
      return { message: categoriesResult.message };
    }
    category_id = categories[0];
    subcategory_id = categories.length === 2 ? categories[1] : null;
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
