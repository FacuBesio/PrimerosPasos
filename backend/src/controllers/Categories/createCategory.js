const { Category } = require("../../db");

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create(name);
    return newCategory.dataValues;;
  } catch (error) {
    console.log("error: ", error.message);
    return { message: error.message };
  }
};

module.exports = createCategory;
