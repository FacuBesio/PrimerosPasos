const { Category } = require("../../db");
const errorsValidator = require("../../utils/validators/categories/errorsValidator");

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create(name);
    return newCategory.dataValues;;
  } catch (error) {
    console.log("error: ", error.message);
   const errorMessage = errorsValidator(name, error);
    return { message: errorMessage };
  }
};

module.exports = createCategory;
