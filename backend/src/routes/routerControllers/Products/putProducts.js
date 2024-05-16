const modifyProduct = require("../../../controllers/Products/modifyProduct");
const categorySitnaxError = require("../../../utils/validators/products/errors/categorySitnaxError");
const formattedProduct = require("../../../utils/formatted/formattedProduct");


const putProduct = async (req, res) => {
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
    categories,
  } = req.body;

  const putBody = {
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
  };

  try {
    const updatedProduct = await modifyProduct(putBody);
    updatedProduct.hasOwnProperty("name")
      ? res.status(200).json({ updated: true, updatedProduct: formattedProduct(updatedProduct) })
      : res
          .status(200)
          .json({ updated: false, message: updatedProduct.message });
  } catch (error) {
    const { errorMessage, status } = categorySitnaxError(categories, error);
    res.status(status).json({ updated: false, error: errorMessage });
  }
};

module.exports = putProduct;
