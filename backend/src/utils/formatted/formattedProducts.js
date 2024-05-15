const formattedProducts = (products) => {
  return products.map((product) => {
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
      Categories,
      Subcategories
    } = product;

    const categories = Categories.map((category) => category);
    const subcategories = Subcategories.map((subcategory) => subcategory);

    return {
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
      subcategories
    };
  });
};

module.exports = formattedProducts;
