const createBulkProducts = require("../../../controllers/Products/createBulkProducts");
const createUser_Owner = require("../../../controllers/Admin/createUser_Owner");
const findAllProducts = require("../../../controllers/Products/findAllProducts");
const formattedProducts = require("../../../utils/formatted/formattedProducts");
const activeInputsValidator = require("../../../utils/validators/products/activeInputsValidator");
const notFoundValidator = require("../../../utils/validators/products/notFoundValidator");
const inputValidator = require("../../../utils/validators/products/inputValidator");

const getProducts = async (req, res) => {
  const {
    page = 1,
    pageSize = 15,
    brand_or_name = "",
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
    page,
    pageSize,
    brand_or_name,
    filterBrands,
    filterCategories,
    filterPrice,
    sortBrand,
    sortId,
    sortName,
    sortPrice,
    sortRating,
  };

  const queryError = inputValidator(queryInputs);
  if (queryError.error) {
    const message = jsonProductsError(queryError.message);
    return res.status(200).json(message);
  }
  const inputsActive = activeInputsValidator(queryInputs);
  let products;

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
        await createUser_Owner();
        await createBulkProducts();
        products = await findAllProducts(paginated);
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
