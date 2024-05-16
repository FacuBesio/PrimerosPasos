const formattedSubcategories = (subcategories) => {
  return subcategories.map((subcategory) => {
    const { id, enabled, name, Products, Category } = subcategory;
    let message;

    const products = Products.map((product) => product.name);
    if (products.length === 0)
      message = `La Subcategoría todavía no posee ningún producto asociado`;

    const category = Category;

    return {
      id,
      enabled,
      name,
      category,
      products,
      message
    };
  });
};

module.exports = formattedSubcategories;
