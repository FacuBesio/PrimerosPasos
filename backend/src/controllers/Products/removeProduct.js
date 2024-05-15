const { Product } = require("../../db");
const findProductbyId = require("./findProductbyId");

const removeProduct = async (id) => {
  const product = await findProductbyId(id);
  if (!product) {
    return {
      message: `No existe un Producto con id '${id}' para eliminar`,
    };
  }

  try {
    productDestroyed = await Product.destroy({
      where: { id: id },
    });
    return productDestroyed;
  } catch (error) {
    console.error(`Error al eliminar producto ${id}: ${error.message}`);
  }
};

module.exports = removeProduct;
