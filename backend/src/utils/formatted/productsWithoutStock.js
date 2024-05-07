const productsWithoutStock = (products) => {
 
  const productsWithoutStock = products.map(({ id, brand, name, price, img, cantidad }) => ({
    id,
    brand,
    name,
    price,
    img,
    cantidad
  }));

  return productsWithoutStock;
};

module.exports = productsWithoutStock;
