const formattedCategories = (categories) => {
  return categories.map((category) => {
    const { id, enabled, name, Products, Subcategories } = category;
    let message;

    const subcategories = Subcategories;

    const products = Products.map((product) => product.name);
    if (products.length === 0)
      message = `La Categoría todavía no posee ningún producto asociado`;

    return {
      id,
      enabled,
      name,
      subcategories,
      products,
      message
    };
  });
};

module.exports = formattedCategories;
