const findAllPurchases = require("../../../controllers/Purchases/findAllPurchases");
const formattedPurchases = require("../../../utils/formatted/formattedPurchases");
const activeInputsValidator = require("../../../utils/validators/purchases/activeInputsValidator");
const notFoundValidator = require("../../../utils/validators/purchases/notFoundValidator");
const inputValidator = require("../../../utils/validators/purchases/inputValidator");
const emptyTable = require("../../../utils/validators/purchases/errors/emptyTable");

const getPurchases = async (req, res) => {
  const {
    page = 1,
    pageSize = 15,
    filterOrders = [],
    filterUsers = [],
    sortId = "",
    sortUsers = "",
  } = req.query;
  const paginated = { page, pageSize };
  const queryInputs = { filterOrders, filterUsers, sortId, sortUsers };
  let purchases;

  const queryError = inputValidator(queryInputs, paginated);
  if (queryError.error) {
    return res.status(200).json(queryError.message);
  }
  const inputsActive = activeInputsValidator(queryInputs);

  try {
    if (inputsActive) {
      purchases = await findAllPurchases(paginated, queryInputs);
      if (purchases.totalResults === 0) {
        const message = notFoundValidator(queryInputs);
        return res.status(200).json(message);
      }
    } else {
      purchases = await findAllPurchases(paginated);
      if (purchases.totalResults === 0) {
        return res.status(200).json(emptyTable());
      }
    }

    const {
      totalResults,
      totalPages,
      currentPage,
      pageSize,
      purchasesDB,
      message,
    } = purchases;

    const purchasesResult = formattedPurchases(purchasesDB);
    return res.status(200).json({
      totalResults: totalResults,
      totalPages: totalPages,
      currentPage: currentPage,
      pageSize: pageSize,
      purchases: purchasesResult,
      message: message,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPurchases;
