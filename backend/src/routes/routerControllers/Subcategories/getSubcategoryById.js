const findSubcategorybyId = require("../../../controllers/Subcategories/findSubcategorybyId");
const formattedSubcategory = require("../../../utils/formatted/formattedSubcategory");

const getSubcategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const subcategory = await findSubcategorybyId(id);
    return subcategory
      ? res.status(200).json({ subcategory: formattedSubcategory(subcategory) })
      : res.status(200).json({
        subcategory: subcategory,
          message: `No existe una Subcategoría con id: ${id}`,
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getSubcategoryById;
