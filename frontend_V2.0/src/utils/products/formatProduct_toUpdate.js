const formatProduct_toUpdate = (product) => {
  const {
    id,
    brand,
    name,
    color,
    size,
    description,
    price,
    stock,
    categories,
    subcategories,
    img,
  } = product;

  const category = categories[0].id;
  let subcategory;
  if (subcategories && subcategories.length > 0) {
    subcategory = subcategories[0].id;
  }

  const current_product = {
    id,
    brand,
    name,
    color,
    size,
    description,
    price,
    stock,
    category,
    subcategory,
    img,
  };
  return { current_product };
};

export default formatProduct_toUpdate;
