const findAllSubcategories = require("../../../controllers/Subcategories/findAllSubcategories");
const formattedSubcategories = require("../../../utils/formatted/formattedSubcategories");
const emptyTable = require("../../../utils/validators/subcategories/emptyTable");

const getSubcategories = async (req, res) => {
  try {
    let subcategories = await findAllSubcategories();
    if (subcategories.totalResults === 0) {
      return res.status(200).json(emptyTable());
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
