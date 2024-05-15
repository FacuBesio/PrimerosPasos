const modifySubcategory = require("../../../controllers/Subcategories/modifySubcategory");
const findCategorybyId = require("../../../controllers/Categories/findCategorybyId");
const formattedSubcategory = require("../../../utils/formatted/formattedSubcategory");


const putSubcategories = async (req, res) => {
    const { id, enabled, name, categoryId } = req.body;

    const category = await findCategorybyId(categoryId);
    if (!category) {
      return res.status(200).json({
        updated: false,
        message: `La categoría con id '${categoryId}' no existe. Para actualizar una subcategoría se la debe asociar a una categoría existente.`,
      });
    }

    try {
    const updatedSubategory = await modifySubcategory(id, enabled, name, categoryId);
    updatedSubategory.hasOwnProperty('name')
    ? res.status(200).json({updated: true, subcategory: formattedSubcategory(updatedSubategory)})
    : res.status(200).json({ updated: false, message: updatedSubategory.message });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

module.exports = putSubcategories;