const createProduct = require("../../../controllers/Products/createProduct");
const formattedProduct = require("../../../utils/formatted/formattedProduct");

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
      ? res
          .status(201)
          .json({ created: true, product: formattedProduct(newProduct) })
      : res.status(200).json({ created: false, message: newProduct.message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postProduct;
