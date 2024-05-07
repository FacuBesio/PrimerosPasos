const findAllOrders = require("../../../controllers/Orders/findAllOrders");
const formattedOrders = require("../../../utils/formatted/formattedOrders");
const activeInputsValidator = require("../../../utils/validators/orders/activeInputsValidator");
const inputValidator = require("../../../utils/validators/orders/inputValidator");
const notFoundValidator = require("../../../utils/validators/orders/notFoundValidator");
const emptyTable = require("../../../utils/validators/orders/errors/emptyTable");

const getOrders = async (req, res) => {
  const {
    page = 1,
    pageSize = 15,
    filterPurchases = [],
    filterUsers = [],
    sortId = "",
  } = req.query;
  const paginated = { page, pageSize };
  const queryInputs = { filterPurchases, filterUsers, sortId };
  let orders;

  const queryError = inputValidator(queryInputs, paginated);
  if (queryError.error) {
    return res.status(200).json(queryError.message);
  }
  const inputsActive = activeInputsValidator(queryInputs);

  try {
    if (inputsActive) {
      orders = await findAllOrders(paginated, queryInputs);
      if (orders.totalResults === 0) {
        const message = notFoundValidator(queryInputs);
        return res.status(200).json(message);
      }
    } else {
      orders = await findAllOrders(paginated);
      if (orders.totalResults === 0) {
        return res.status(200).json(emptyTable());
      }
    }

    const {
      totalResults,
      totalPages,
      currentPage,
      pageSize,
      ordersDB,
      message,
    } = orders;

    const ordersResult = formattedOrders(ordersDB);
    return res.status(200).json({
      totalResults: totalResults,
      totalPages: totalPages,
      currentPage: currentPage,
      pageSize: pageSize,
      orders: ordersResult,
      message: message,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getOrders;
