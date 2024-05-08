const formattedProduct = (product) => {
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
  } = product;

  // const categories = Categories.map((category) => category.name);

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
    Categories,
  };
};

module.exports = formattedProduct;
