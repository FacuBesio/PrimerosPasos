const createBulkCategories = require("../../../controllers/Categories/createBulkCategories");
const createBulkSubcategories = require("../../../controllers/Subcategories/createBulkSubcategories");
const findAllCategories = require("../../../controllers/Categories/findAllCategories");
const findAllSubcategories = require("../../../controllers/Subcategories/findAllSubcategories");
const formattedSubcategories = require("../../../utils/formatted/formattedSubcategories");

const getSubcategories = async (req, res) => {
  try {
    let subcategories = await findAllSubcategories();
    if (subcategories.length === 0) {
      let categories = await findAllCategories();
      if (categories.length === 0) {
        await createBulkCategories();
      }
      await createBulkSubcategories();
      subcategories = await findAllSubcategories();
    }
    subcategories = formattedSubcategories(subcategories);
    return res.status(200).json({
      totalResults: subcategories.length,
      subcategories: subcategories,
      message: `Se ha completado la consulta exitosamente`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getSubcategories;
