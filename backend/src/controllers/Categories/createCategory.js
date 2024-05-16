const { Category } = require("../../db");
const findCategorybyId = require("./findCategorybyId");
const errorsValidator = require("../../utils/validators/categories/errorsValidator");

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create(name);
    const { id } = newCategory
    const createdCategory = await findCategorybyId(id);
    return createdCategory.dataValues;;
  } catch (error) {
    console.log("error: ", error.message);
   const errorMessage = errorsValidator(name, error);
    return { message: errorMessage };
  }
};

module.exports = createCategory;
