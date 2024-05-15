const { Subcategory } = require("../../db");
const findJsonSubcategories = require("../../utils/json/findJsonSubcategories");

const createBulkSubcategories = async () => {
  try {
    const jsonSubcategories = await findJsonSubcategories();
    const bulkSubcategories = await Subcategory.bulkCreate(jsonSubcategories);
    return bulkSubcategories;
  } catch (error) {
    console.log(error);
  }
};

module.exports = createBulkSubcategories;
