const { Product, Category } = require("../../db");
const findProductbyId = require("../../controllers/Products/findProductbyId");

const modifyProduct = async (putBody) => {
  const {
    id,
    brand,
    name,
    img,
    description,
    price,
    stock,
    rating,
    enabled,
    categories,
  } = putBody;
  try {
    let updatedProduct = await Product.update(
      {
        brand,
        name,
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
    await updatedProduct.setCategories(categories);
    updatedProduct = await findProductbyId(id);
    
    return updatedProduct.dataValues;
  } catch (error) {
    console.error("Error al actualizar el producto:", error.message);
    throw error;
  }
};

module.exports = modifyProduct;
