const formattedCategory = (category) => {
  const { id, name, Products } = category;
  let message;

  const products = Products.map((product) => product.name);
  if (products.length === 0)
    message = `La Categoría todavía no posee ningún producto asociado`;

  return {
    id,
    name,
    products,
    message,
  };
};

module.exports = formattedCategory;
