const findAllProducts = require("../../../controllers/Products/findAllProducts");
const formattedProducts = require("../../../utils/formatted/formattedProducts");
const activeInputsValidator = require("../../../utils/validators/products/activeInputsValidator");
const notFoundValidator = require("../../../utils/validators/products/notFoundValidator");
const inputValidator = require("../../../utils/validators/products/inputValidator");
const emptyTable = require("../../../utils/validators/products/errors/emptyTable");

const getProducts = async (req, res) => {
  let products;

  const {
    page = 1,
    pageSize = 12,
    brand_or_name = "",
    filterName = "",
    filterColor = "",
    filterSize = "",
    filterBrands = "",
    filterCategories = [],
    filterPrice = [],
    sortBrand = "",
    sortId = "",
    sortName = "",
    sortPrice = "",
    sortRating = "",
  } = req.query;

  const paginated = { page, pageSize };

  const queryInputs = {
    brand_or_name,
    filterName,
    filterColor,
    filterSize,
    filterBrands,
    filterCategories,
    filterPrice,
    sortBrand,
    sortId,
    sortName,
    sortPrice,
    sortRating,
  };

  const queryError = inputValidator(queryInputs, paginated);
  if (queryError.error) {
    return res.status(200).json(queryError.message);
  }

  const inputsActive = activeInputsValidator(queryInputs);

  try {
    if (inputsActive) {
      products = await findAllProducts(paginated, queryInputs);
      if (products.totalResults === 0) {
        const message = notFoundValidator(queryInputs);
        return res.status(200).json(message);
      }
    } else {
      products = await findAllProducts(paginated);
      if (products.totalResults === 0) {
        return res.status(200).json(emptyTable());
      }
    }

    const {
      totalResults,
      totalPages,
      currentPage,
      pageSize,
      productsDB,
      message,
    } = products;

    const productsResult = formattedProducts(productsDB);
    return res.status(200).json({
      totalResults: totalResults,
      totalPages: totalPages,
      currentPage: currentPage,
      pageSize: pageSize,
      products: productsResult,
      message: message,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getProducts;
