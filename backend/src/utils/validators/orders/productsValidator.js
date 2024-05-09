const productsValidator = async (Product, id_products) => {
  const products_db = await Product.findAll({ where: { id: id_products } });
  const productsQuantityValidator = products_db.length === id_products.length;

  if (!productsQuantityValidator) {
    for (const id of id_products) {
      const existingTest = await Product.findByPk(id);
      if (!existingTest)
        return {
          error: true,
          message: `No se pudo crear o actualizar la Orden. El producto con id '${id}' no existe.`,
        };
    }
  }
  return { error: false };
};

module.exports = productsValidator;
