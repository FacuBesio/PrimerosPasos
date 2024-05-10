const createProduct = require("../../../controllers/Products/createProduct");

const postProduct = async (req, res) => {
  const {
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
  } = req.body;

  if (!categories || categories.length === 0) {
    return res.status(200).json({
      created: false,
      error:
        "Para crear un producto, debe tener al menos una categoría asociada",
    });
  }

  const product = {
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
  };

  try {
    const newProduct = await createProduct({ product, categories });
    newProduct.hasOwnProperty("name")
      ? res.status(201).json({ created: true, product: newProduct })
      : res.status(200).json({ created: false, message: newProduct.message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postProduct;
