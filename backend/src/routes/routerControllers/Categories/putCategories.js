const modifyCategory = require("../../../controllers/Categories/modifyCategory");
const formattedCategory = require("../../../utils/formatted/formattedCategory");

const putCategories = async (req, res) => {
    const { id, enabled, name } = req.body;
    try {
    const updatedCategory = await modifyCategory(id, enabled, name);
    updatedCategory.hasOwnProperty('name')
    ? res.status(200).json({updated: true, category: formattedCategory(updatedCategory)})
    : res.status(200).json({ updated: false, message: updatedCategory.message });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

module.exports = putCategories;