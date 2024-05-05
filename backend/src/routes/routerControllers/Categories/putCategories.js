const modifyCategory = require("../../../controllers/Categories/modifyCategory");

const putCategories = async (req, res) => {
    const { id, name } = req.body;
    try {
    const updatedCategory = await modifyCategory(id, name);
    updatedCategory.hasOwnProperty('name')
    ? res.status(200).json({updated: true, category: updatedCategory})
    : res.status(200).json({ updated: false, message: updatedCategory.message });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

module.exports = putCategories;