const findCategorybyId = require("../../../controllers/Categories/findCategorybyId");
const formattedCategory = require("../../../utils/formatted/formattedCategory");

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await findCategorybyId(id);
    return category
      ? res.status(200).json({ category: formattedCategory(category) })
      : res.status(200).json({
          category: category,
          message: `No existe una Categoría con id: ${id}`,
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCategoryById;
