const removeSubcategory = require("../../../controllers/Subcategories/removeSubcategory");

const deleteSubategory = async (req, res) => {
  try {
    const { id } = req.params;
    let message;
    let removed = false;

    const subcategoryDeleted = await removeSubcategory(id);
    subcategoryDeleted === 1
      ? (message = `Subcategoria '${id}' eliminada correctamente`) &&
        (removed = true)
      : (message = subcategoryDeleted.message);

    res.status(200).json({ removed: removed, message: message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteSubategory;
