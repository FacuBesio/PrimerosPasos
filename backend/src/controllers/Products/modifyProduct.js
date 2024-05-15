const { Product, Category } = require("../../db");
const findProductbyId = require("../../controllers/Products/findProductbyId");
const findCategorybyId = require("../../controllers/Categories/findCategorybyId");
const findSubcategorybyId = require("../../controllers/Subcategories/findSubcategorybyId");
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

  if (categories.length > 2) {
    throw new Error(
      "Se admiten como máximo hasta dos valores de categorías. El primer valor corresponderá a una categoría y el segundo valor a una subcategoría (opcional)."
    );
  }
  let category;
  if (categories && categories.length > 0) {
    category = categories[0];
    const categoryTest = await findCategorybyId(category);
    if (!categoryTest)
      throw new Error(
        `La categoría con id '${category}' no existe. Por favor ingresa un categoría válida.`
      );
  }

  let subcategory;
  if (categories && categories.length === 2) {
    subcategory = categories[1];
    const subcategoryTest = await findSubcategorybyId(subcategory);
    if (!subcategoryTest)
      throw new Error(
        `La subcategoría con id '${subcategory}' no existe. Por favor ingresa un subcategoría válida.`
      );
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
    category && (await updatedProduct.setCategories(category));
    subcategory && (await updatedProduct.setSubcategories(subcategory));
    updatedProduct = await findProductbyId(id);
    return updatedProduct.dataValues;
  } catch (error) {
    console.log("error: ", error.message);
    const errorMessage = errorsValidator(putBody, categories, error);
    return { message: errorMessage };
  }
};

module.exports = modifyProduct;
