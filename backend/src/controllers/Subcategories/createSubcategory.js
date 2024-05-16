const { Subcategory } = require("../../db");
const findSubcategorybyId = require("./findSubcategorybyId");
const errorsValidator = require("../../utils/validators/subcategories/errorsValidator");

const createSubcategory = async (name, categoryId) => {
  try {
    const newSubcategory = await Subcategory.create({ name, categoryId });
    const { id } = newSubcategory
    const createdSubcategory = await findSubcategorybyId(id);
    return createdSubcategory.dataValues;
  } catch (error) {
    console.log("error: ", error.message);
    const errorMessage = errorsValidator(name, error);
    return { message: errorMessage };
  }
};

module.exports = createSubcategory;
