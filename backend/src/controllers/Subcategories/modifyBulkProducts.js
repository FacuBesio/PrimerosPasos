const { Product } = require("../../db");

const modifyProducts = async (product_id, category_id) => {
  try {
    let updatedProduct = await Product.findByPk(product_id);
    await updatedProduct.setCategories(category_id);
  } catch (error) {
    console.log(
      `Error al actualizar la categoria del producto ${id}: ${error}`
    );
  }
};

module.exports = modifyProducts;
