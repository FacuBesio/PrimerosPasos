const findAllUsers = require("../../../controllers/Users/findAllUsers");
const formattedUsers = require("../../../utils/formatted/formattedUsers");
const activeInputsValidator = require("../../../utils/validators/users/activeInputsValidator");
const inputValidator = require("../../../utils/validators/users/inputValidator");
const notFoundValidator = require("../../../utils/validators/users/notFoundValidator");
const emptyTable = require("../../../utils/validators/users/errors/emptyTable");

const getUsers = async (req, res) => {
  let users;
  const {
    page = 1,
    pageSize = 15,
    name_or_email = "",
    sortId = "",
  } = req.query;
  const paginated = { page, pageSize };
  const queryInputs = { name_or_email, sortId };

  const queryError = inputValidator(queryInputs, paginated);
  if (queryError.error) {
    return res.status(200).json(queryError.message);
  }

  const inputsActive = activeInputsValidator(queryInputs);

  try {
    if (inputsActive) {
      users = await findAllUsers(paginated, queryInputs);
      if (users.totalResults === 0) {
        const message = notFoundValidator(queryInputs);
        return res.status(200).json(message);
      }
    } else {
      users = await findAllUsers(paginated);
      if (users.totalResults === 0) {
        return res.status(200).json(emptyTable());
      }
    }

    const {
      totalResults,
      totalPages,
      currentPage,
      pageSize,
      usersDB,
      message,
    } = users;

    const usersResult = formattedUsers(usersDB);
    return res.status(200).json({
      totalResults: totalResults,
      totalPages: totalPages,
      currentPage: currentPage,
      pageSize: pageSize,
      orders: usersResult,
      message: message,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUsers;
